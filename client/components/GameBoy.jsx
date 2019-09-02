import React, {useState, useEffect, Component} from 'react'
import { Slider, Typography, CardMedia, FormControl, Input, InputLabel, MenuItem, Select, Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import GameBoyImage from '../assets/gb_screen.png';
import styled from "styled-components";

const StyledContainer = styled(Container)`
    background-image: url(${GameBoyImage});
    background-repeat: no-repeat;
    background-size: 50vh 50vh;
    background-position: center;
    width:50vh;
    height:50vh;
    padding: 4vh;
    max-width:50vh;
    max-height: 50vh;
 `; 


//hmmm :thinking:
const questions = [
    // Required
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
            "Super Senior",
            "Other"
        ]
    },
    {
        name: 'Email',
        type: "email",
        required: true,
        key: "email"
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
        type: "text",
        required: true,
        key: "school"
    },
    {
        name: 'Major',
        type: "text",
        required: true,
        key: "major"
    },
    {
        name: 'Experience Level',
        type: "subQuestion",
        required: true,
        subQuestions:[
            {
                name: "Programming",
                key: "programming"
                
            },
            {
                name: "2D Art",
                key: "two_d_art"
            },
            {
                name: "3D modeling",
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
        name: 'Preferred Disciplines',
        type: "text",
        required: true,
        key: "preferred_disciplines",
        multi: true
    },
    {
        name: 'Resume',
        type: "url",
        required: true,
        key: "resume_link"
    },
    // Optional
    {
        name: 'Preferred Teammates',
        type: "text",
        required: false,
        key: "desired_teammates",
        multi: true
    },
    {
        name: 'Portfolio Link',
        type: "url",
        required: false,
        key: "portfolio"
    },
    {
        name: 'Github Link',
        type: "url",
        required: false,
        key: "github"
    },
    {
        name: 'LinkedIn Link',
        type: "url",
        required: false,
        key: "linkedIn"
    },
];



export function GameBoy() {
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
        console.log("an update has occured");
        const sub = {...submission}
        sub[key] = value;
        setSubmission(sub);
    }

    // FIXME: does this work? who knows this is just the idea 
    function submitSubmission(sub) {
        axios.post(`/routes/form/${sub.email}`, sub).
        then(result => console.log(`response: ${result}`)).
        catch(err => {
            // FIXME: IDK something logical maybe
            console.log(err);
            throw err;
        });
    } 

    function nextScreen() {
        if (questionNumber == questions.length) {
            console.log("END OF QUESTIONS");
        } else {
            setQuestionNumber(questionNumber+1);
        }
    };

    function prevScreen() {
        setQuestionNumber(Math.max(questionNumber-1, 0));
    };
    

    function getScreen() {
        if (questionNumber == questions.length) {
            return (
            <StyledContainer>
            <Button
                onClick={submitSubmission(submission)}
            >Submit</Button>
            <Button onClick={prevScreen}>PREV</Button>
            </StyledContainer>);
        } else {
            return (
                <StyledContainer>
                <Screen
                    question={questions[questionNumber]}
                    state={submission}
                    value={submission[questions[questionNumber].key]}
                    setValue={value => updateSubmission(questions[questionNumber].key, value)}
                />
                <Button onClick={prevScreen}>PREV</Button>
                <Button onClick={nextScreen}>NEXT</Button>
                </StyledContainer>);
        }
    }

    return(getScreen());
}



function SelectQuestion({question, setValue, value}) { 
    return(
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
    return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
}
function isArray(v) {
    return v !== null && v instanceof Array
}
function logAndReturn(v, message="") {
    console.log(message + " " + v);
    return v;
}
function MultiStringField({value, setValue, deleteField}) {
    
    return(<FormControl>
        <Input type="string" value={value}
        onChange={e => {
            setValue(e.target.value);
        }}
        />
        <Button onClick={deleteField}>remove</Button>
    </FormControl>);
}

function MultiString({question, setValue, value}) {
    return (
        <div>
            <Typography>{question.name}</Typography>
            {
                value.map((rv, idx) => 
                <MultiStringField
                    value={rv}
                    setValue={(val)=>{
                        let v = [...value];
                        v[idx] = val;
                        setValue(v);
                    }}  
                    deleteField={()=> {
                        let v = [...value];
                        v.splice(idx, 1);
                        setValue(v);
                    }}
                />)
            }
            <Button onClick={()=>setValue([...value, ""])}>add</Button>

        </div>
    );
}

function MultiQuestion({question, idx, setValue, value}) {
    return(
        <div id={`subQuestion-${question.name}`} className="subQuestion">
        <Typography>{`${question.name}: `}</Typography>
        <Slider 
            value={value[question.key] != null ? value[question.key]:0}
            onChange={(e, tgt) => {
                let v = {...value};
                v[question.key] =tgt;
                setValue(v);
            }}
            min={1}
            max={5}
            marks
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"
        />

    </div>
    );
}

function StringScreen({question, setValue, value}) {
    return (
        <div id={`${question.name}-screen`} className="screen">
        <InputLabel>{`${question.name}: `}</InputLabel>
        <Input type={question.type} value={value}
        onChange={e => {
            setValue(e.target.value)
        }}

        />
    </div>
    );
}


function Screen({question, value, setValue}) {
    if (question.choices != null) {
        return (SelectQuestion({question: question, setValue: setValue, value: value}));
    // } else if (question.multi != null) {
    } else if (isObj(value)) {
        return (
        <div id={`${question.name}-screen`} className="screen">
        <Typography>{question.name}</Typography>
        <br/>
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
        return(MultiString({question: question, setValue: setValue, value: value}));
    } else {
        return (StringScreen({question: question, value:value, setValue:setValue}));
    }
}

export default GameBoy;