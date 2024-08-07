import React from 'react'
import { StyledGoalContainer,CustomHead } from './styledComponents/styleComponents'
import { BiTargetLock } from "react-icons/bi";
import { GiHamburger } from "react-icons/gi";
import {RightCircleFilled} from '@ant-design/icons'
const GoalsContainer = () => {
    return (
        <StyledGoalContainer>
            <div className='goalItem'>
                <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
                    <div className='iconCont'  style={{backgroundColor:'#ea0d0d51'}}>
                      <BiTargetLock style={{fontSize:'25px'}} />
                    </div>
                    <CustomHead fontSize="16px">Goals</CustomHead>
                </div>
                <RightCircleFilled style={{fontSize:'25px'}}/>
            </div>
            <div className='goalItem'>
                <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
                    <div className='iconCont'  style={{backgroundColor:'#1d5cd151'}}>
                      <GiHamburger style={{color:'red',fontSize:'25px'}} />
                    </div>
                    <CustomHead fontSize="16px">Popular Dishes</CustomHead>
                </div>
                <RightCircleFilled style={{fontSize:'25px'}}/>
            </div>
            <div className='goalItem'>
                <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
                    <div className='iconCont'  style={{backgroundColor:'#2fa91051'}}>
                      <BiTargetLock style={{color:'red',fontSize:'25px'}} />
                    </div>
                    <CustomHead fontSize="16px">Popular Dishes</CustomHead>
                </div>
                <RightCircleFilled style={{fontSize:'25px'}}/>
            </div>
        </StyledGoalContainer>
    )
}

export default GoalsContainer
