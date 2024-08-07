import React from 'react'
import { StyeldFeedBackContainer, CustomHead, FeedbackItem, FeedbackItemConrainer, StarIcon } from './styledComponents/styleComponents'
import employe from '../assets/employe.jpg';
import { StarOutlined, StarFilled } from "@ant-design/icons"
import { FaRegStar } from "react-icons/fa6";
const FeedBackContainer = () => {
  const FeedbackList = [
    { imageUrl: employe, name: 'Jenny Wilson', rating: 4, description: 'Restaurant owners are now going an extra mile to satisfy their clients. By adding free dessert, “on the house” drink, and extra politeness are some of the new features that are helping them get good reviews for their restaurant.' },
    { imageUrl: employe, name: 'Daniel wilson', rating: 5, description: ' “on the house” drink, and extra politeness are some of the new features that are helping them get good reviews for their restaurant.' },
    { imageUrl: employe, name: 'Devone Lane', rating: 4, description: 'Restaurant owners are now going an extra mile to satisfy their clients. By adding free dessert, “on the house” drink, and extra politeness are some of the new features that are helping them get good reviews for their restaurant.' },
    { imageUrl: employe, name: 'Davency Leo', rating: 4, description: 'Restaurant owners are now going an extra mile to satisfy their clients. By adding free dessert, “on the house” drink, and extra politeness are some of the new features that are helping them get good reviews for their restaurant.' },
  ]
  return (
    <StyeldFeedBackContainer>
      <CustomHead fontSize="16px" fontWeight="600">Customer's Feedback</CustomHead>
      <FeedbackItemConrainer>
        {FeedbackList && FeedbackList.length > 0 ? FeedbackList.map(item => (
          <FeedbackItem key={item.name}>
            <div style={{ display: 'flex', gap: "8px", alignItems: 'center' }}>
              <img src={item.imageUrl} alt="" srcset="" />
              <CustomHead fontSize="14px">{item.name}</CustomHead>
            </div>
            <StarIcon>
              {
                item.rating > 4 ? (
                  <div>
                    <StarFilled /> 
                    <StarFilled /> 
                    <StarFilled />
                    <StarFilled /> 
                    <StarFilled />
                  </div>
                ) :  item.rating > 3  ? (
                  <div>
                    <StarFilled /> 
                    <StarFilled />
                    <StarFilled /> 
                    <StarFilled />
                    <StarOutlined />
                  </div>
                ) :  item.rating > 2  ? (
                  <div>
                    <StarFilled /> 
                    <StarFilled />
                    <StarFilled />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                ) : item.rating > 1  ? (
                  <div>
                    <StarFilled /> 
                    <StarFilled />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                ) :item.rating > 0  ? (
                  <div>
                    <StarFilled /> 
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                    <StarOutlined />
                  </div>
                ) :''

              }
            </StarIcon>
            <CustomHead fontSize="11px" fontWeight="400">
           {item.description}
            </CustomHead>
          </FeedbackItem>
        )) : ''}

      </FeedbackItemConrainer>
    </StyeldFeedBackContainer>
  )
}

export default FeedBackContainer
