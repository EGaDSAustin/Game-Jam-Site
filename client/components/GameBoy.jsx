import React, {useState, useEffect, Component} from 'react'
import { Slider, Typography, CardMedia, FormControl, Input, InputLabel, MenuItem, Select, Button, Container } from '@material-ui/core';
import axios from 'axios';
import GameBoyImage from '../assets/gb_screen.png'
import styled from 'styled-components'

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
            "Softmore",
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
        name: 'Pronoun',
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
            programming: 0,
            two_d_art: 0,
            three_d_art: 0,
            music: 0,
            sound: 0,
            design: 0,
            narrative: 0
        },
        preferred_disciplines: [],
        resume_link: "",
        desired_teamates: [],
        portfolio: "",
        linkedIn: "",
        github: ""
    });

    function updateSubmission(key, value) {
        const sub = {...submission}
        sub[key] = value;
        setSubmission(sub);
    }

    // FIXME: does this work? who knows this is just the idea 
    function submitSumbmission(sub) {
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
    


    return(
    <StyledContainer>
        <FormControl>
            {
                <Screen 
                    question={questions[questionNumber]}
                    state={submission}
                    value={submission[questions[questionNumber].key]}
                    setValue={value => updateSubmission(questions[questionNumber].key, value)}
                />
            }
            <Button onClick={prevScreen}>PREV</Button>
            <Button onClick={nextScreen}>NEXT</Button>
        </FormControl>
    </StyledContainer>
    );
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

function MultiString({question, setValue, value, startAmount=3}) {
    return (
        <div>
            <Typography>{question.name}</Typography>
            <Typography>{JSON.stringify(value)}</Typography>
            <FormControl>
            {
                value.map((rv, idx) => 
                <div>
                    <Input type="string" value={value[idx]}
                    onChange={e => {
                        let v = [...value];
                        v[idx] = e.target.value;
                        setValue(v);
                    }}
                    />
                    
                    <Button onClick={()=>setValue([...value].splice(idx, 1))}>remove</Button>
                </div>)
            }
            </FormControl>
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
            min={0}
            max={5}
            marks
            valueLabelDisplay="auto"
            aria-labelledby="discrete-slider"
        />

        {/* FIXME: NEXT AND PREV BUTTON MOVED HERE */}
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


function isArray(v) {
    return v !== null && v instanceof Array
}

function isObj(v) {
    return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
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