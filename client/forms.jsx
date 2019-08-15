import React, { useState } from 'react'
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

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
                onChange={e => setValue(e.target.value)}/>
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
            validate: () => true,
            // validate: () => true,
        },
        {
            name: 'First Name',
            value: null,
            type: "text",
            required: true,
            validate: () => true
        },
        {
            name: 'Last Name',
            value: null,
            type: "text",
            required: true,
            validate: () => true
        },
        {
            name: 'Pronoun',
            value: null,
            type: "text",
            required: true,
            validate: () => true
        },
        {
            name: 'Password',
            value: null,
            type: "password",
            required: true,
            validate: () => true
        },
        {
            name: 'School',
            value: null,
            type: "text",
            required: true,
            validate: () => true
        },
        {
            name: 'Major',
            value: null,
            type: "text",
            required: true,
            validate: () => true
        },
        {
            name: 'Year', //Fresh/Soph/Jun/Sen/Grad?
            value: null,  
            type: "month", // could also be text or number depending on ^
            required: true ,
            validate: () => true
        },
        {
            name: 'Experience Level',
            value: null,
            type: "text",
            required: true,
            validate: () => true
        },
        {
            name: 'Preferred Disciplines',
            value: null,
            type: "text",
            required: true,
            validate: () => true
        },
        {
            name: 'Resume',
            value: null,
            type: "url",
            required: true,
            validate: () => true
        },
        // Optional
        {
            name: 'Preferred Teammates',
            value: null,
            type: "text",
            required: false,
            validate: () => true
        },
        {
            name: 'Portfolio Link',
            value: null,
            type: "url",
            required: false,
            validate: () => true
            
        },
        {
            name: 'Github Link',
            value: null,
            type: "url",
            required: false,
            validate: () => true
        },
        {
            name: 'LinkedIn Link',
            value: null,
            type: "url",
            required: false,
            validate: () => true
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
    // TODO: error fields when they dont work owo
    const checkRequiredAndValid = () => {
        const errorFields = [];
        for(const field of fields) {
            if (field.required && field.value == null && field.validate()) {
                errorFields.push(field.name);
                //alert("Please don't be mad ;-;")
                return false;
            } else {
                // WE GOOD HOMMIE
                return true;
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
            if(checkRequiredAndValid()) { //LULW hypersomegapoggerscrazy Kappa
                // go to next page
                // this.props.history.push('/programming-so-easy');
                // route here like above but actually working :)
            }
        }}>
            {fields.map((field, index) => (
                <Field type={field.type} index={index} field={field} updateField={updateField} />
            ))}
            <Input type='submit'/>
        </form>
    </div>
    );
}
