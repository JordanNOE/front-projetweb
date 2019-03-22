import React, {  Component } from 'react';
import {  Link } from 'react-router-dom';
import './App.css';
import Route from './Route';
 
    
class App extends Component {
        
       
   
  render() {
    return (
      <div className="App">     
            
                <div className="conteneur">
                    
                        
                            <header className="row" >
                                <div className="col-md-2 col-4 text-center">
                                    <h3><Link to="/">Home</Link></h3>
                                </div>
                                <div className="col-md-2 col-4 text -center">
                                    <h3><Link to="/admin">Formulaire</Link></h3>
                                </div>
                            </header>
                            <main >
                                < Route />
                            </main>
                    
                </div>
            
      </div>
    );
  }
}

export default App;
