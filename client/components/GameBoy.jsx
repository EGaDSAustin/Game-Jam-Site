import React, { useState, useEffect, Component } from 'react'
import { FormGroup, IconButton, Slider, Typography, CardMedia, FormControl, Input, InputLabel, MenuItem, Select, Button, Container } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import { positions } from '@material-ui/system';
import axios from 'axios';
import GameBoyImage from '../assets/gb_screen.png';
import SnackBar from "./SnackBar";
import { Link as RouterLink } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import {withRouter} from 'react-router-dom';
import SubmitButton from "./SubmitButton";


const minSize = Math.min(window.innerWidth, window.innerHeight);

const gameboyTheme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Press Start 2P"'
        ].join(',')
    }
});

const containerStyles = makeStyles(theme => ({
    container: {
        backgroundImage: `url(${GameBoyImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "80vmin 80vmin",
        backgroundPosition: "center",
        width: "80vmin",
        height: "80vmin",
        padding: "4vmin",
        maxWidth: "80vmin",
        maxHeight: "80vmin",
        fontFamily: '"Press Start 2P"'
    }
}));


const screenStyles = makeStyles(theme => ({
    sliderPage: {
        leftPadding: "5%",
        rightPadding: "5%",
        display: 'flex',
        justifyContent: "space-between"
    },
    slider: {
        align: "right",
        width: "20vmin",
    },
    sliderText: {
        align: "left",
        display: 'inline-block'
    },
    multiString: {

    },
    multiStringField: {
        width: "80%",

    },
    multiStringFieldDeleteButton: {
        backgroundColor: theme.palette.error.dark,
        color: "white",
        transform: "scale(.5)"

    }
}));

const CustomSlider = withStyles({
    
})(Slider)

const buttonStyles = makeStyles(theme => ({
    prevButton: { //hey there bud :3
        position: "fixed",
        top: "400px",
        left: "150px"
    },
    nextButton: {
        position: "fixed",
        top: "400px",
        left: "150px"
    }
}));

// const classes=useStyles(); <div classname={classes.sliderPage}></div>

//hmmm :thinking:
const questions = [
    // Required
    {
        name: 'Email',
        type: "email",
        required: true,
        key: "email",
        info: "What is your Email address?",
        validate: (v) => {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v.toLowerCase())
        }
    },
    {
        name: 'First Name',
        type: "text",
        required: true,
        key: "first_name"
    },
    {
        name: 'Last Name',
        type: "text",
        required: true,
        key: "last_name"
    },
    {
        name: 'Preferred Pronouns',
        info: "ex: they/them, she/her, he/him",
        type: "text",
        required: true,
        key: "pronouns"
    },
    // {
    //     name: 'Password',
    //     type: "password",
    //     required: true,
    //     key: null
    // },
    {
        name: 'School',
        info: "What University do you attend?",
        type: "text",
        required: true,
        key: "school"
    },
    {
        name: 'Year', //Fresh/Soph/Jun/Sen/Grad?
        type: "text", // could also be text or number depending on ^
        required: true,
        key: "year",
        choices: [
            "Freshman",
            "Sophomore",
            "Junior",
            "Senior",
            "Super Senior"
        ]
    },
    {
        name: 'Major',
        type: "text",
        required: true,
        key: "major"
    },
    {
        name: 'Experience Levels',
        type: "subQuestion",
        required: true,
        subQuestions: [
            {
                name: "Programming",
                key: "programming"

            },
            {
                name: "2D Art",
                key: "two_d_art"
            },
            {
                name: "3D Art",
                key: "three_d_art"
            },
            {
                name: "Music",
                key: "music"
            },
            {
                name: "Writing",
                key: "narrative"
            },
            {
                name: "Game Audio",
                key: "sound"
            },
            {
                name: "Design",
                key: "design"
            },
        ],
        key: "experience_level"
    },
    {
        name: 'Preferred Role(s)\n (Programmer, 2D Artist, Designer, etc.)',
        type: "text",
        required: true,
        key: "preferred_disciplines",
        multi: true
    },
    {
        name: 'Resume',
        info: "please Link your resume\n(on Google Drive, Dropbox, etc.)",
        type: "url",
        required: true,
        key: "resume_link"
    },
    // Optional
    {
        name: 'Preferred Teammates\n(Optional)',
        type: "text",
        required: false,
        key: "desired_teammates",
        multi: true
    },
    {
        name: 'Portfolio\n(Optional)',
        info: 'Link your Portfolio site: ',
        type: "url",
        required: false,
        key: "portfolio"
    },
    {
        name: 'Github\n(Optional)',
        info: 'Link your github profile: ',
        type: "url",
        required: false,
        key: "github"
    },
    {
        name: 'LinkedIn \n(Optional)',
        info: 'Link your LinkedIn profile: ',
        type: "url",
        required: false,
        key: "linkedIn"
    },
];




function RouterlessGameBoy({history}) {

    const defaultSnackbarMessage = "This is a required Field";
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState(defaultSnackbarMessage);

    const [questionNumber, setQuestionNumber] = useState(0);
    const [submission, setSubmission] = useState({
        email: "",
        first_name: "",
        last_name: "",
        pronouns: "",
        school: "",
        major: "",
        year: "",
        experience_level: {
            programming: 1,
            two_d_art: 1,
            three_d_art: 1,
            music: 1,
            sound: 1,
            design: 1,
            narrative: 1
        },
        preferred_disciplines: [],
        resume_link: "",
        desired_teammates: [],
        portfolio: "",
        linkedIn: "",
        github: ""
    });

    function updateSubmission(key, value) {
        const sub = { ...submission }
        sub[key] = value;
        setSubmission(sub);
    }

    function submitSubmission(submit) {
        let sub = {};
        // cleanup submission 
        for (let k of Object.keys(submit)) {
            const v = submit[k];
            if (v instanceof String && v == "") continue;
            else if (v instanceof String) sub[k] = v.toLowerCase();
            else if(v){
                sub[k] = v;
            }
            // else if (isObj(v)) {
            //     for (let [kk, vv] of sub) {
            //         if (vv instanceof String && vv == "") sub[k][kk] = undefined;
            //         else if (vv instanceof String) sub[k][kk] = vv.toLowerCase();
            //     }
            // } 
            // else if (isArray(v)) {
            //     for (let vv of v) {
            //         if (vv instanceof String && vv == "") vv = undefined;
            //         else if (vv instanceof String) vv = vv.toLowerCase();
            //     }
            // }
        }
        axios.post(`/routes/form/`, sub).
            then(result => {
                // console.log(`response: ${JSON.stringify(result)}`);
                history.push('/');
            }).
            catch((err) => {
                try {
                    setSnackbarMessage(err.response.data.error.message);
                } catch {
                    setSnackbarMessage("Woopsies, an error");
                }   
                // console.log("response error: " + JSON.stringify(err));
                setSnackbarOpen(true);
            });
    }

    function nextScreen() {
        if (questions[questionNumber].required && !submission[questions[questionNumber].key]) {
                    setSnackbarOpen(true);
        } else {
            if (questions[questionNumber].validate != null && !questions[questionNumber].validate(submission[questions[questionNumber].key])) {
                setSnackbarMessage("invalid submission");
                setSnackbarOpen(true);
            } else {
                setSnackbarMessage(defaultSnackbarMessage)
                if (questionNumber == questions.length-1) {
                    // console.log("END OF QUESTIONS");
                } else {
                    setQuestionNumber(questionNumber + 1);
                }
            }
        }
        if (questionNumber == questions.length-1) {
            submitSubmission(submission);
        }
    }

    function prevScreen() {
        setSnackbarMessage(defaultSnackbarMessage);
        setQuestionNumber(Math.max(questionNumber - 1, 0));
    }

    function getPrevButton() {
        const buttonClasses = buttonStyles();
        if (questionNumber != 0) return (<Button onClick={prevScreen}>Back</Button>);
    }

    function getNextButton() {
        const buttonClasses = buttonStyles();
        if (questionNumber == questions.length - 1) {
            return (

                <SubmitButton 
                    submit={()=>{submitSubmission(submission)}}
                />
            );
        } else {
            return (<Button onClick={nextScreen}>Next</Button>);
        }
    }

    const classes = containerStyles();
    return (
        <ThemeProvider theme={gameboyTheme} >
            <Container className={classes.container}>
                <Screen
                    question={questions[questionNumber]}
                    state={submission}
                    value={submission[questions[questionNumber].key]}
                    setValue={value => updateSubmission(questions[questionNumber].key, value)}
                    next={nextScreen} 
                />
                <SnackBar
                    open={snackbarOpen}
                    setOpen={setSnackbarOpen}
                    message={snackbarMessage}
                />
                
            </Container>
            {getPrevButton()}
            {getNextButton()}
        </ThemeProvider>
    );
}



function SelectQuestion({ question, setValue, value }) {
    return (
        <div id={`${question.name}-screen`} className="screen">
            <InputLabel>{question.name}</InputLabel>
            <Select
                value={value}
                onChange={e => {
                    setValue(e.target.value);
                }}
            >
                {question.choices.map(c =>
                    <MenuItem value={c}>{c}</MenuItem>
                )}
            </Select>
        </div>
    );
}

function isObj(v) {
    return typeof v === 'object' && v !== null && !(v instanceof Array) && !(v instanceof Date);
}
function isArray(v) {
    return v !== null && v instanceof Array
}
function logAndReturn(v, message = "") {
    // console.log(message + " " + v);
    return v;
}

function MultiStringField({ value, setValue, deleteField }) {
    const classes = screenStyles();

    return (<FormControl className={classes.multiStringField}>
        <span>
            <Input type="string" value={value}
                onChange={e => {
                    setValue(e.target.value);
                }}
            />
            <IconButton className={classes.multiStringFieldDeleteButton} onClick={deleteField}><DeleteIcon fontSize="inherit" /></IconButton>
        </span>
        <br />
    </FormControl>);
}

function MultiString({ question, setValue, value }) {
    const classes = screenStyles();

    return (
        <div className={classes.multiString}>
            <Typography>{question.name}</Typography>
            {
                value.map((rv, idx) =>
                    <MultiStringField
                        value={rv}
                        setValue={(val) => {
                            let v = [...value];
                            v[idx] = val;
                            setValue(v);
                        }}
                        deleteField={() => {
                            let v = [...value];
                            v.splice(idx, 1);
                            setValue(v);
                        }}
                    />)
            }
            <br />
            <Button onClick={() => setValue([...value, ""])}>add</Button>

        </div>
    );
}

function MultiQuestion({ question, idx, setValue, value }) {
    const classes = screenStyles();

    return (
        <span id={`subQuestion-${question.name}`} className={classes.sliderPage}>
            <Typography className={classes.sliderText}>{`${question.name}: `}</Typography>
            <CustomSlider
                className={classes.slider}
                value={value[question.key] != null ? value[question.key] : 0}
                onChange={(e, tgt) => {
                    let v = { ...value };
                    v[question.key] = tgt;
                    setValue(v);
                }}
                min={1}
                max={5}
                marks
                valueLabelDisplay="auto"
                aria-labelledby="discrete-slider"
            />
        </span>
    );
}

function StringScreen({ question, setValue, value, next }) {
    return (
        <form id={`${question.name}-screen`} className="screen" onSubmit={(e) => {
            e.preventDefault();
            next();
        }}>
            <InputLabel>{`${question.name}: `}</InputLabel>
            <h3>{question.info}</h3>
            <Input type={question.type} value={value}
                onChange={e => {
                    setValue(e.target.value)
                }}
            />
        </form>
    );
}


function Screen({ question, value, setValue, next }) {
    if (question.choices != null) {
        return (SelectQuestion({ question: question, setValue: setValue, value: value }));
        // } else if (question.multi != null) {
    } else if (isObj(value)) {
        return (
            <div id={`${question.name}-screen`} className="screen">
                <Typography>{question.name}</Typography>
                <br />
                {question.subQuestions.map((q, idx) =>
                    <MultiQuestion
                        question={q}
                        idx={idx}
                        setValue={setValue}
                        value={value}
                    />
                )}
            </div>
        );
    } else if (isArray(value)) {
        return (MultiString({ question: question, setValue: setValue, value: value }));
    } else {
        return (StringScreen({ question: question, value: value, setValue: setValue, next: next }));
    }
}
const GameBoy = withRouter(RouterlessGameBoy);

export default GameBoy;