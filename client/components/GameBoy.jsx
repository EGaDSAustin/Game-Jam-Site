import React, {useState, useEffect, Component} from 'react'
import { CardMedia, FormControl, Input, InputLabel, Select, Button, Container } from '@material-ui/core';
import axios from 'axios';
import GameBoyImage from '../assets/gb_screen.png'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
    
    
`; //:( :c :O :[ >:] :> :3 (~ o_o)~ 
//y scre



const questions = [
    // Required
    {
        name: 'Year', //Fresh/Soph/Jun/Sen/Grad?
        type: "number", // could also be text or number depending on ^
        required: true,
        key: "year"
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
            throw err;
        });
    } 

    function nextScreen() {
        if (questionNumber+1 == questions.length) {
            
        } else {
            setQuestionNumber(questionNumber+1);
        }
    };

    function prevScreen() {
        setQuestionNumber(Math.max(questionNumber-1, 0));
    };

    
    const screens = [
        ...questions.map((q, idx )=> 
        <Screen 
            type={q.type} 
            question={q}
            state={submission}
            index={idx}
            update={value => updateSubmission(q.key, value)}
            next={nextScreen}
        />),
        <Screen
            type={"submit"} 
            question={{name: "submit"}}
            state={submission}
            index={questions.length}
            update={value => {}}
            next={() => {}}
        />
    ];
    


    return(
    <StyledContainer>
        
        <FormControl>
            <img src = {GameBoyImage}/>
            {screens[questionNumber]}
            <Button onClick={prevScreen}>PREV</Button>
            <Button onClick={nextScreen}>NEXT</Button>
        </FormControl>
    </StyledContainer>
    );
}



function Screen({type, question, state, index, update, next}) {
    const [value, setValue] = useState("");
    const [idx, setIdx] = useState(index);
    // FIXME: figure out if on blure happens on button click, send a submiT command
    // on next click
    // TODO: whole component
    // Pass in the update stoof

    useEffect(() => {
        if (idx != index) {
            setValue(state[question.key] || "");
            setIdx(index);
        }
    });

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
    </div>
    ); 
}

export default GameBoy;