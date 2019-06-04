import React from 'react'

class TestForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            pass: null
        };

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePassHandler = this.changePassHandler.bind(this);
    }

    changeNameHandler(event) {
        this.setState({
            name: event.target.value,
        });
    }

    changeEmailHandler(event) {
        this.setState({
            email: event.target.value,
        });
    }

    changePassHandler(event) {
        this.setState({
            pass: event.target.value,
        });
    }


    render() {


        return (
            <div className="testform">
                <form onSubmit={e => {
                    alert('SUMBIT');
                    event.preventDefault();
                }}>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.changeHandler} /> <br />
                    Email:
                    <input type="email" value={this.state.email} onChange={this.changeHandler} /> <br />
                    Pass:
                    <input type="password" value={this.state.pass} onChange={this.changeHandler} /> <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default TestForm;