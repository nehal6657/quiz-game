import React, { Component } from 'react';
import Select from './Pages/Choose/Select';
import FrontPage from './Pages/FrontPage/FrontPage';

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
          <Select/>
        </div>
      );
    }

}
export default App;
