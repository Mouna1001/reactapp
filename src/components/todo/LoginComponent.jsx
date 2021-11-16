import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component {
 
    constructor(props) {
        super(props)
 
        this.state = {
            username: "",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }
 
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }
 
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
                </div>
            </div>
        );
    }
 
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }
 
    handleLogin() {
        if (this.state.username === "test" && this.state.password === "test") {
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`);

        } else {
            console.log("Login failed");
            this.setState({
                hasLoginFailed: true,
                showSuccessMessage: false
            });
        }
    }
}
 
// function ShowInvalidCredential(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credential</div>
//     }
//     return null;
// }
 
 
function LoginComponentWithNavigate(props) {
    const navigate = useNavigate();
    return <LoginComponent {...props} navigate={navigate} />
}
 
export default LoginComponentWithNavigate;