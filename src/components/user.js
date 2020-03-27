import React, { Component } from 'react';

import FormFields from '../widgets/forms/formfields';

class User extends Component {

    state = {
        formDaata: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'enter your name '
                }
            },
            lastname: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Lastame',
                config: {
                    name: 'Lastname_input',
                    type: 'text',
                    placeholder: 'enter your last  name '
                }
            }
        }

    }


    updateForm = (newState) => {
        this.setState({
            formData: newState
        })
    }

    submitform = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value
        }


    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitform}>

                    <FormFields
                        formData={this.state.formDaata}
                        change={(newState) => this.updateForm(newState)}
                    />

                    <button type="submit"> submit </button>
                </form>
            </div>
        )
    }
}

export default User;