import React, {  Component } from 'react';

import './home.css';
import BarC from '../components/Bar';
import PieC from '../components/Pie';
import LineC from '../components/Line';
import LineR from  '../components/LineRC';
import Weathercomponent from  '../components/Weathercomponent';
import SimpleTreemap from  '../components/SimpleTreemap';

        
class home extends Component {
        
       
   
  render() {
    return (
      <div className="home">     
            
                        <div className="row">
                            <div className="col-12  text-center  mx-auto">
                            <h1> Music DashBoard </h1>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-5 col-10 space">
                                <LineC />
                            </div>
                            <div className="col-md-5 col-10 space">
                                <BarC />
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-5 col-10 space">
                                <PieC />
                            </div>
                            <div className="col-md-5 col-10 space">
                                <LineR/>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-5 col-10 space">
                                <Weathercomponent/>
                            </div>
                            
                            <div className="col-md-5 col-10 space">
                                <SimpleTreemap/>
                            </div>
                        </div>
                        
                   
        
        </div>
    );
  }
}

export default home;
