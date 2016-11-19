import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {BarChart,PieChart,LineChart} from 'react-d3-components';
class Chart extends Component{
    render(){
        var data = {
            label: '饼状图',
            values: [{x: '川菜', y: 10}, {x: '鲁菜', y: 4}, {x: '粤菜', y: 3}]
        };
        var data2 = {
            label: '线形图',
                values: [
                    {x: 0, y: 2}, {x: 1.5, y: 5},
                    {x: 3, y: 6}, {x: 3.5, y: 6.5},
                    {x: 4, y: 6}, {x: 4.5, y: 6},
                    {x: 5, y: 7}, {x: 5.5, y: 8}]
        };

        return (
            <div>
                <BarChart
                    data={data}
                    width={400}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
                <PieChart
                    data={data}
                    width={500}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
                <LineChart
                    data={data2}
                    width={500}
                    height={400}
                    margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
        </div>
    );
}
}
ReactDOM.render(<Chart />, document.getElementById('app'));


