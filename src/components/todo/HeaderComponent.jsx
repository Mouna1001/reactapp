import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';

class HeaderComponent extends Component {
    render(){
        const isUserLoggedIn=AuthenticationService.isUserLoggedIn();

        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><Link to="/login" className="navbar-brand">todoAPP</Link></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/welcome/test">Home</Link></li>}                        
                        {isUserLoggedIn &&<li ><Link className="nav-link" to="/todos">Todos</Link> </li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&<li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn &&<li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </div>
        )
    }

}
export default HeaderComponent;
