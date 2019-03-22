import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineC extends Component{
    constructor(props){
        super(props);
        this.state= {
            chartData: {

            labels: ['0-10', '10-25', '25-40', '40-60', '60-80', '80+'],
            datasets:[
                {
                label:'Population listening to music',
                data:[
                    181045,
                    682930,
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
                   

                     <Line
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
export default LineC;