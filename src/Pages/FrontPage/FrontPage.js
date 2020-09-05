import React from 'react';
import './fp.css';
import q from './quiz.jpg';

const FrontPage = ({oninput}) => {
    return(
      <div>
        <div id="main_div" className="center w-40">
          <div className = "card pa3 ma4">
            <h1 className="f2" id="title">WELCOME TO OUR QUIZ GAME !!!</h1>
            <div className = "card_content">
              <image src={q} alt="logo" height="100px" width="auto"/>                 
              <div className="mv3">
                <label className="db fw6 lh-copy f6" >Enter your name to continue</label>
                <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white"  
                id="name"
                onChange = {oninput}/>
              </div>

              <div className="enter-button">
                <input 
                  
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                  type="submit" 
                  value="Enter>>"/>
              </div>
            </div>
          </div>
        </div>
      </div>  

    );
}
export default FrontPage;