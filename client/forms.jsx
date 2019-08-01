import React, { useState } from 'react'
import { FormControl, Input, InputLabel } from '@material-ui/core';


function Field({ type, index, field, updateField }) {
    const [value, setValue] = useState('');

    return (
        <div>
            <FormControl>
                <InputLabel>{field.name}</InputLabel>
                <Input type={type} value={value}
                onBlur={ e => {
                    setValue(e.target.value);
                    updateField(index, value);
                }}
                onChange={e => {
                    setValue(e.target.value);
                }}/>
            </FormControl>
        </div>
    );
}

class ScrollToTopOnMount extends React.Component {
    componentDidMount() {
      window.scrollTo(0, 0);
    }
  
    render() {
      return null;
    }
}

export function TestForm(props){
    const [fields, setFields] = useState([
        // Required
        {
            name: 'Email',
            value: null,
            type: "email",
            required: true,
            // validate: () => true,
        },
        {
            name: 'First Name',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Last Name',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Pronoun',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Password',
            value: null,
            type: "password",
            required: true
        },
        {
            name: 'School',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Major',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Year', // Are you trying to do year Started? Graduated? Started College? Fresh/Soph/Jun/Sen/Grad?
            value: null,  
            type: "month", // could also be text or number depending on ^
            required: true 
        },
        {
            name: 'Experience Level',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Preferred Disciplines',
            value: null,
            type: "text",
            required: true
        },
        {
            name: 'Resume',
            value: null,
            type: "url",
            required: true
        },
        // Optional
        {
            name: 'Preferred Teammates',
            value: null,
            type: "text",
            required: false
        },
        {
            name: 'Portfolio Link',
            value: null,
            type: "url",
            required: false
            
        },
        {
            name: 'Github Link',
            value: null,
            type: "url",
            required: false
        },
        {
            name: 'LinkedIn Link',
            value: null,
            type: "url",
            required: false
        },
    ]);

    const updateField = (index, value) => {
        const newFields = [...fields];
        const newField = newFields[index];  
        newField.value = value;
        newFields[index] = newField;
        setFields(newFields); 
    };
    // errorstr = `missing required field ${field.name}`;
    
    // TODO: STEVE AND COLETTE DO THIS
    const checkRequiredAndValid = () => {
        const errorFields = [];
        for(let field of fields) {
            if (field.required && field.value == null) {
                errorFields.push(field.name);
                
                //alert("Please don't be mad ;-;")
            } else {
                // WE GOOD HOMMIE
            }
            console.log({errorFields});
            // run correct validation method
        }
    };

    return (
        <div>
        <ScrollToTopOnMount/>
        <form onSubmit={e => {
            e.preventDefault();
            // TODO: got stuff to do
            checkRequiredAndValid(); 
        }}>
            {fields.map((field, index) => (
                <Field type={field.type} index={index} field={field} updateField={updateField} />
            ))}
            <Input type='submit'/>
        </form>
    </div>
    );
}

