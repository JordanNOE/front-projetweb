import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarC extends Component{
    constructor(props){
        super(props);
        this.state= {
            chartData: {
            labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'NB'],
            datasets:[
                {
                label:'Number of music event',
                data:[
                    94,
                    45,
                    60,
                    19,
                    62,
                    72
                ],
                backgroundColor:[
                    'rgba(255,99,132,0.6)',
                    'rgba(55,162,232,0.6)',
                    'rgba(255,206,86,0.6)',
                    'rgba(75,199,192,0.6)',
                    'rgba(155,99,255,0.6)',
                    'rgba(255,159,64,0.6)',
'rgba(255,99,132,0.6)']
                }
            ]
            }}}
                
    render(){
       return(
           
                   <div className="chart">
                   <Bar 
                        width={50}
                        height={25}
                        data={this.state.chartData}
                        options={{

                        }}
                    />

                    
                        
           </div>
       )  
    }
}
export default BarC;