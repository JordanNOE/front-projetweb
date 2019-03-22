import React from 'react'
import '../conteneur/home.css';

class Form extends React.Component{
    render() {
        return(
            <form onSubmit={this.props.getWeather}>
                <input type='text' name='city' placeholder='City...'/><br/><br/>
                <input type='text' name='country' placeholder='Country...'/><br/><br/>
                <button>Get Weather</button>
            </form>
        );
    }
};
export default Form;