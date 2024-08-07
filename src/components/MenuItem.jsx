import React from 'react'
import order from '../assets/order.png'
import delivery from '../assets/groceries.png'
import canceled from '../assets/cancel-order.png'
import revenue from '../assets/salary.png'
import { CardItem,CardItemContainer } from './styledComponents/styleComponents';
import { FaCloudArrowDown } from "react-icons/fa6";
import { FaCloudArrowUp } from "react-icons/fa6";

const MenuItem = () => {
  const items = [
    { lable: 'Total Orders', img: order, value: "75", percentage: "3%", asset: "incoming" },
    { lable: 'Total Deliveries', img: delivery, value: "70", percentage: "3%", asset: "outgoing" },
    { lable: 'Total Orders', img: canceled, value: "05", percentage: "3%", asset: "incoming" },
    { lable: 'Total Orders', img: revenue, value: "$12k", percentage: "3%", asset: "outgoing" },
  ]
  return (
    <CardItemContainer >
      {
        items && items.length > 0 ?
          items.map((data,index) => (
            <CardItem key={index}>
              <div>
                <img src={data.img} alt="icons" width="28px" height='28px' srcSet={data.img} />
                <div style={{ fontSize: '12px',marginTop:'4px' }}>{data.lable}</div>
              </div>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <div style={{fontSize:'18px',fontWeight:'500'}}>
                  {data.value}
                </div>
                <div style={{display:'flex',gap:'4px'}}>
                  {data.asset === 'incoming' ?  <FaCloudArrowDown style={{color:'blue'}}/> : <FaCloudArrowUp/> }
                    <div style={{fontSize:'12px',color:'red'}}>
                      {data.percentage}
                    </div>
                </div>
              </div>
            </CardItem>
          ))
          : ''
      }
    </CardItemContainer>
  )
}

export default MenuItem
