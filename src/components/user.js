import React, { Component } from 'react';

import FormFields from '../widgets/forms/formfields';

class User extends Component {

    state = {
        formData: {
            name: {
                element: 'input',
                value: '',
                label: true,
                labelText: 'Name',
                config: {
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'enter your name '
                },
                validation: {
                    requried: true,
                    minLen: 5
                },
                valid: false,
                touched: false,
                validationMesage: ''
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
                },
                validation: {
                    requried: true
                },
                valid: false,
                touched: false,
                validationMesage: ''
            },
            message: {
                element: 'textaera',
                value: '',
                label: true,
                labelText: 'message',
                config: {
                    name: 'message_input',
                    rows: 4,
                    cols: 36
                },

                validation: {
                    requried: false
                },
                valid: true

            },
            age: {
                element: 'select',
                value: '',
                label: true,
                labelText: 'age',
                config: {
                    name: 'age_input',
                    options: [
                        {
                            val: '1', text: '10-20'
                        },
                        {
                            val: '2', text: '20-30'
                        },
                        {
                            val: '3', text: '30-40'
                        },
                    ]
                },
                validation: {
                    required: false
                },
                valid: true

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

        let formIsValid = true;

        for (let key in this.state.formData) {
            dataToSubmit[key] = this.state.formData[key].value;
        }

        for (let key in this.state.formData) {

            formIsValid = this.state.formData[key].value && formIsValid;

        }
        if (formIsValid) {
            console.log(dataToSubmit) 
        }


    }


    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitform}>

                    <FormFields
                        formData={this.state.formData}
                        onBlur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)}
                    />

                    <button type="submit"> submit </button>
                </form>
            </div>
        )
    }
}

export default User;