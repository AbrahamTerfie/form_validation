import React, { Component } from 'react';

class Uncontrolled extends Component {



    handlesubmitClick = (event) => {
        event.preventDefault();

        const values = {
            name: this.name.value,
            lastname: this.lastname.value
        }
        console.log(values)
    }

    render() {
        return (

            <div> <div className="container">
                <form>
                    <div className="form_element">
                        <label>enter name </label>
                        <input type="text"
                            ref={input => this.name = input}
                        />
                    </div>


                    <div className="form_element">
                        <label>last  name </label>
                        <input type="text"
                            ref={input => this.lastname = input}
                        />
                    </div>
                    <button onClick={this.handlesubmitClick} >

                        sign in
                    </button>
                </form>
            </div>
                Controlled
            </div>
        )
    }
}

export default Uncontrolled;