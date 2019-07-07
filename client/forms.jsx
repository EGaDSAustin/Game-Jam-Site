import React, {useState } from 'react'
import { cpus } from 'os';


function Field({type, index, field, updateField}) {
    const [value, setValue] = useState('');
    
    return (
        <div>
            <h3><strong>hi field {index+1} this field is: </strong> <a style={{color: 'black'}}>{field.value}</a> </h3> 
            
            <form onSubmit={e => {
                e.preventDefault();
                updateField(index, value);
            }}>
                <label>{field.name}: </label>
                <input type={type} value={value} onChange={e => {setValue(e.target.value)}}/>
            </form>
        </div>
    );
}

export function TestForm(props){
    const [fields, setFields] = useState([
        {
            name: 'Email',
            value: null,
            type: "text"
        },
        {
            name: 'First Name',
            value: null,
            type: "text"
        },
        {
            name: 'Last Name',
            value: null,
            type: "text"
        },
        {
            name: 'School',
            value: null,
            type: 'text'
        },
        {
            name: 'Password',
            value: null,
            type: 'password'
        },
    ]);

    const updateField = (index, value) => {
        const newFields = [...fields];
        const newField = newFields[index];  
        newField.value = value;
        newFields[index] = newField;
        setFields(newFields);
    };
    
    return (
    <div>
        <hi>FORM with {fields.length}</hi>
           {fields.map((field, index) => (
                <Field type={field.type} index={index} field={field} updateField={updateField} />
                // <h3>field {index}</h3>
            ))}
    </div>
    );
}

