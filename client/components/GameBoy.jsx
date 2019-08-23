import React, {useState, useEffect, Component} from 'react'
import { FormControl, Input, InputLabel, Select, Button } from '@material-ui/core';
import axios from 'axios';


const questions = [
    // Required
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
        name: 'Year', //Fresh/Soph/Jun/Sen/Grad?
        type: "text", // could also be text or number depending on ^
        required: true,
        key: "year"
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
        const sub = {...fields}
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

    const screens = questions.map(q => 
        <Screen 
            type={q.type} 
            field={q}
            update={value => updateSubmission(q.key, value)}
        />
    );

    return(
    <div>
        {screens[questionNumber]}
        <Button onClick={()=>setQuestionNumber(Math.min(questionNumber+1, questions.length-1))}>NEXT</Button>
    </div>
    );
}

function Screen({type, field, update}) {
    const [state, setState] = useState();
    // FIXME: figure out if on blure happens on button click, send a submiT command
    // on next click

    // TODO: whole component
    // Pass in the update stoof
    return(<div>{field.name}</div>); 
}

export default GameBoy;