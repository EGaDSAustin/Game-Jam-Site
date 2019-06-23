import React from 'react';
import "./app.css"
import TestForm from "./forms.jsx"

class App extends React.Component {
    render() {

        return (
            <div className='main'>
                <h1 >⚠️ <span className='text'>STILL UNDER CONSTRUCTION </span>⚠️</h1>
                <img src="http://dancesportlive.net/dsl/images/under_construction.gif" />

                <h2>forms:</h2>
                <TestForm p='hi' />
            </div>
        );
    }
}

export default App;