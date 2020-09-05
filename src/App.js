import React, { Component } from 'react';
import Select from './Pages/Choose/Select';
import FrontPage from './Pages/FrontPage/FrontPage';
import './App.css';
class App extends Component{
    constructor(){
        super();
        this.state = {
            name: ''
        }
    }S
    oninput = () =>{
        this.setState({name:this.state.input});
    }


    render(){
      return(
        <div>
          <FrontPage name = {this.name}/>
        </div>
      );
    }

}
export default App;
