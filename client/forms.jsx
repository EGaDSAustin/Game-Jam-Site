import React from 'react'

class TestForm extends React.Component {

    render() {
        return (
            <div className="testform">
                <form>
                    Name:
                    <input type="text"></input> <br />
                    Email:
                    <input type="email"></input> <br />
                    Pass:
                    <input type="password"></input>
                </form>
            </div>
        );
    }
}

export default TestForm;