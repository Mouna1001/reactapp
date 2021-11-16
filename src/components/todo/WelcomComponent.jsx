import { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService"
class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessMessage = this.handleSuccessMessage.bind(this)

        this.state={
            welcomeMessage:''
        }
    }
    render(){
    return  (
        <>
        <div>
            <h1>Welcom!</h1>
            <div className="container"> Welcome to Todo Application.You can manage your todos <Link to="/todos">here</Link> </div>
        </div>
        <div className="container">
            Click here to get a customized welcome messages.
            <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get welcome Message</button>

        </div>
        <div className="container">
            {this.state.welcomeMessage}
        </div>
        </>
    )
  }
  retrieveWelcomeMessage(){
      HelloWorldService.executeHelloWorldService()
      .then(response => this.handleSuccessMessage(response))
      //.catch()
  }
  handleSuccessMessage(response){

    this.setState({welcomeMessage:response.data})
  }
}
  export default WelcomeComponent