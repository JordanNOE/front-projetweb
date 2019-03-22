import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

class PieC extends Component{
    constructor(props){
        super(props);
        this.state= {
            chartData: {
            labels: ['France', 'USA', 'UK', 'Germany', 'Belgium', 'Dutch'],
            datasets:[
                {
                label:'Country most represented in music festival',
                data:[
                    617594,
                    181045,
                    153060,
                    106519,
                    105162,
                    95072
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
                   
                     <Pie
                        width={100}
	                    height={50}
                        data={this.state.chartData}
                        options={{

                        }}
                        />
                   
                        
           </div>
       )  
    }
}
export default PieC;