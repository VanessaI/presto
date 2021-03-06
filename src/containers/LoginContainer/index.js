import React, { Component } from 'react';
import LoginComponent from '../../components/LoginComponent';
import {aPost, routes} from "../../api/api";

export default class LoginContainer extends Component {

    constructor(props) {
        super(props);

        // initialize state here
        // use this.setState() outside of constructor to set the value
        this.state = {
            email: '',
            password: ''
        };
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = e => {
        this.setState({ password: e.target.value });
    };

    handleLogin = () => {
        const postData = {
            username: this.state.email,
            password: this.state.password
        };

        aPost(routes.login, postData).then(response => {
            const { status, data } = response;
            console.log(status);
            console.log(data);

            if (status === 200) {
                localStorage.token = data.token;
                localStorage.loggedInUser = JSON.stringify({ user: data.user });
                this.props.history.push('/customer')
            }
        }).catch(err => {
            console.log(err);
        });
    };

    handleSignup = () => {
        this.props.history.push('/signup');
    };

    render() {
        return (
            <div>
                <LoginComponent
                    email={this.state.email}
                    password={this.state.password}
                    handleEmailChange={this.handleEmailChange}
                    handlePasswordChange={this.handlePasswordChange}
                    handleLogin={this.handleLogin}
                    handleSignup={this.handleSignup}
                    validationState={this.getValidationState}
                />;
            </div>
        );
    }
}