import React, {  Component } from 'react';

import './admin.css';

        
class admin extends Component {
        
       
  constructor(props) {
    super(props);
    this.state={
      value1:'Surname :',
      value2:'Name :',
      value3:'Followers :',
      value4:'Undefined : ',
      value5:'Artiste: '
    }
  }

  render() {
    return (
      <div className="profile "> 
          <h2>Ajout {this.state.value5}</h2>    
            <form className="text-center">
              <label>{this.state.value1} 
                    <input type="text" name="{this.state.value1} " />
              </label>
                <br/>
                <label>{this.state.value2} 
                    <input type="text" name="{this.state.value2} " />
              </label>
              <br/>
              <label>{this.state.value3} 
                    <input type="text" name="{this.state.value3} " />
              </label>
              <br/>
              <label>{this.state.value4} 
                    <input type="text" name="{this.state.value4} " />
              </label>
                <br/>
              
                
              <input type="submit" value="Submit" />
              <br/>
              <button
                type="button"
                id="bouton"
                onClick = {()=>{this.setState({value1:'Title : ',value2:'Duration : ',value3:'Listenings : ',value4:'Likes : ',value5:'Track'})}}
              >
        Add Track
        </button>
        <button
                type="button"
                id="bouton"
                onClick = {()=>{this.setState({value1:' Title : ',value2:'Release : ',value3:'Genre : ',value4:'Cover Url : ',value5:'Album'})}}
              >
        Add Album
        </button>
        <button
                type="button"
                id="bouton"
                onClick = {()=>{this.setState({value1:' Surname : ',value2:'Name : ',value3:'Followers : ',value4:'Undefined : ',value5:'Artist'})}}
              >
        Add Artist
        </button>
            </form>
                       
        </div>
    );
  }
}

export default admin;
