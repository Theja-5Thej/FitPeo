import React from 'react'
import { DatePicker } from 'antd';
import { CustomHead,StyledChart } from './styledComponents/styleComponents';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
const ChartContainer = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    const data = {
        labels: ['5', '10', '15', '20', '25', '30', '35','40','45','50'],
        datasets: [
            {
                label: 'Sales',
                backgroundColor: '#1089ae',
                borderColor: '#1c8ec7',
                borderRadius:'50',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.8)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: [65, 59, 56, 55, 40,15,20,25,35,40],
                fontSize:'16px',

            }
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    return (
        <StyledChart >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <CustomHead fontSize="18px" fontWeight="600">Activity</CustomHead>
                <DatePicker onChange={onChange} needConfirm style={{ backgroundColor: '#2A2B30', color: 'white' }} />
            </div>
            <div>
                <div style={{width:'100%',height:'100%'}}>
                <Bar data={data} options={options} style={{height:'100%',width:'100%'}} />
                </div>
            </div>
        </StyledChart>
    )
}

export default ChartContainer
