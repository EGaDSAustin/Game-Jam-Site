import React, {useState, useEffect, Component} from 'react'
import { Typography, CardMedia, FormControl, Input, InputLabel, MenuItem, Select, Button, Container } from '@material-ui/core';
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
        type: "text",
        required: true,
        subQuestions:[
            {
                name: "programming",
                type: "number", 
                key: "programming"
                
            },
            {
                name: "programming",
                type: "number", 
                key: "programming"
            },
            {
                name: "programming",
                type: "number", 
                key: "programming"
            },
            {
                name: "programming",
                type: "number", 
                key: "programming"
            },
            {
                name: "programming",
                type: "number", 
                key: "programming"
            },
            {
                name: "programming",
                type: "number", 
                key: "programming"
            },
            {
                name: "programming",
                type: "number", 
                key: "programming"
            },
           
        ],
        key: "experience_level"
    },
    {
        name: 'Preferred Disciplines',
        type: "text",
        required: true,
        key: "preferred_disciplines"
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
        key: "desired_teammates"
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
    const [submission, setSubmission] = useState({});

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

    

    
    const screens = [
        ...questions.map((q, idx) => 
        <Screen 
            type={q.type} 
            question={q}
            state={submission}
            index={idx}
            update={value => updateSubmission(q.key, value)}
            next={nextScreen}
            prev={prevScreen}
        />),
        <Button
            onClick={()=> {
                console.log(`submission is: ${submission}`);
                submitSumbmission(submission);
            }}
        >Submit Form!</Button>
    ];

    function nextScreen() {
        if (questionNumber == screens.length) {
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
            {screens[questionNumber]}
           
        </FormControl>
    </StyledContainer>
    );
}


function Screen({type, question, state, index, update, next, prev}) {
    const [value, setValue] = useState("");
    const [idx, setIdx] = useState(index);
    // FIXME: figure out if on blur happens on button click, send a submiT command
    // on next click
    // TODO: whole component
    // Pass in the update stoof

    useEffect(() => {
        if (idx != index) {
            setValue(state[question.key] || "");
            setIdx(index);
        }
    });

    if (question.choices != null) {
        return(
            <div id={`${question.name}-screen`} className="screen">
            <InputLabel>{question.name}</InputLabel>
            <Select
                value={value}
                onChange={e => {
                    setValue(e.target.value)
                }}
                >
                {question.choices.map(c => 
                    <MenuItem value={c}>{c}</MenuItem>
                )}
            </Select>
            <Button onClick={prev}>PREV</Button>
            <Button onClick={next}>NEXT</Button>
        </div>
        );
    }
    return(
        <div id={`${question.name}-screen`} className="screen">
            <InputLabel>{`${question.name}: `}</InputLabel>
            <Input type={type} value={value}
            onBlur={e => {
                setValue(e.target.value);
                update(value);
            }}
            onChange={e => {
                setValue(e.target.value)
            }}

            />
            <br/>
            <Button onClick={prev}>PREV</Button>
            <Button onClick={next}>NEXT</Button>
        </div>
        );
}

export default GameBoy;