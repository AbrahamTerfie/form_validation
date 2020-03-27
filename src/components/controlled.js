import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastname: ''
    }



    handleNameChange = (event) => {

        this.setState({
            name: event.target.value
        })
    }

    handleLastNameChange = (event) => {

        this.setState({
            lastname: event.target.value
        })
    }

    onshandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div> <div className="container">
                <form onSubmit={this.onshandler} >
                    <div className="form_element">
                        <label>enter name </label>
                        <input type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name} />
                    </div>


                    <div className="form_element">
                        <label>last  name </label>
                        <input type="text"
                            onChange={this.handleLastNameChange}

                            value={this.state.lastname} />
                    </div>
                    <button type="submit" > submit </button>
                </form>
            </div>
                Controlled
            </div>
        )
    }
}

export default Controlled;