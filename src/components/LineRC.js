import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
 } from 'recharts';
     
import React,{  PureComponent } from 'react';


class LineR extends PureComponent{
    constructor(props){
        super(props);
        this.state= {  
        
        data : [
  {
    name: '2000', rapListener: 4000, electronicMusicListener: 2400, amt: 2400,
  },
  {
    name: '2001', rapListener: 3000, electronicMusicListener: 1398, amt: 2210,
  },
  {
    name: '2002', rapListener: 2000, electronicMusicListener: 9800, amt: 2290,
  },
  {
    name: '2003', rapListener: 2780, electronicMusicListener: 3908, amt: 2000,
  },
  {
    name: '2004', rapListener: 1890, electronicMusicListener: 4800, amt: 2181,
  },
  {
    name: '2005', rapListener: 2390, electronicMusicListener: 3800, amt: 2500,
  },
  {
    name: '2006', rapListener: 3490, electronicMusicListener: 4300, amt: 2100,
  },
]
    }
}
      
render(){
    return(
        <div className="chart">
            <ResponsiveContainer height={250} width='99%'>                         
                <LineChart
                    data={this.state.data}
                    margin={{top: 20, right: 20, left: 20, bottom: 20,}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="rapListener" stroke="#8884d8" activeDot=  {{ r: 8 }} />
                    <Line type="monotone" dataKey="electronicMusicListener" stroke="#82ca9d" />
                </LineChart>   
            </ResponsiveContainer>
        </div>
       )  
    }
}
export default LineR;      
      
      
     