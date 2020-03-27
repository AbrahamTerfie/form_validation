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
                },
                validation: {
                    requried: true
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
                    requried: false
                },
                valid: true,
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
                }

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
        console.log(dataToSubmit)

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