import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import LoginComponentWithNavigate from './LoginComponent';
import WelcomeComponent from './WelcomComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
//import AuthenticatedRoute from './AuthenticatedRoute';
 
class TodoApp extends Component {

  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent/>
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigate />}/>
            <Route path="/login" element={<LoginComponentWithNavigate />}/>
            <Route path="/todos" element={<ListTodosComponent />}/>
            <Route path="/logout" element={<LogoutComponent />}/>
            <Route path="/welcome/:name" element={<WelcomeComponent />}/>
            <Route path="*" element={ <ErrorComponent /> } />
          </Routes>
          <FooterComponent/>
        </Router>
        {/*<LoginComponent/>
        <WelcomeComponent/>*/}
      
      </div>
    );
  }
}
function ErrorComponent(){
    return <div>An Error Occured!</div>
}


export default TodoApp

