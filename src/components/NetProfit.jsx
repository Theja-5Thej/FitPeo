import React from 'react'
import { NetProfitCotainer } from './styledComponents/styleComponents';
import { FaCloudArrowDown } from "react-icons/fa6";
import {Progress} from 'antd'
const NetProfit = () => {
    return (
        <NetProfitCotainer>

            <div className='inside' style={{ display: 'flex', justifyContent: 'space-between',height:'100%' }}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
                    <div style={{ fontSize: '10px' }}>Net Profit</div>
                    <div style={{ fontSize: '22px', fontWeight: '600' }}>$6759.25</div>
                    <div style={{ display: 'flex' ,gap:'8px '}}>
                        <FaCloudArrowDown />
                        <div style={{ color: 'green' }}>3%</div>
                    </div>
                </div>
                <div style={{height:'100%'}}>
                <Progress type="circle" percent={75} size={80} trailColor='black'   format={percent => (
              <span style={{ color: 'white' }}>{`${percent}%`}</span>
                     )}/>
                </div>
            </div>
        </NetProfitCotainer>
    )
}

export default NetProfit
