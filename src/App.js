import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Select from './Pages/Choose/Select';
import FrontPage from './Pages/FrontPage/FrontPage';
import './App.css';


const p = {
  "particles": {
      "number": {
          "value": 90
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}

class App extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            route: 'frontpage',
            issignedin: true
        }
    }S
    oninput = (event) =>{
        this.setState({name:event.target.value});
        console.log(event.target.value);
    }

    render(){
      return(
        <div>
          <Particles className="particls" params={p}/>
          <FrontPage oninput = {this.oninput} />
        </div>
      );
    }

}
export default App;
