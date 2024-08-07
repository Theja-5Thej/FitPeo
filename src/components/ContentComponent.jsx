import React from 'react'
import { StyledContent, CustomHead } from '../components/styledComponents/styleComponents'
import { Col, Divider, Row } from 'antd';
import MenuItem from './MenuItem';
import NetProfit from './NetProfit';
import ChartContainer from './ChartContainer'; 
import GoalsContainer from './GoalsContainer';
import TableContainer from './TableContainer';
import FeedBackContainer from './FeedBackContainer'
const ContentComponent = () => {
    return (
        <StyledContent>
            <CustomHead fontSize="18px" fontWeight="600">Dashboard</CustomHead>
            <div style={{ marginTop: '20px',display:'flex',flexDirection:'column',gap:'20px' }}>
                <Row  gutter={[16,16]} style={{gap:"20px"}}>
                    <Col  lg={13} sm={24} xs={24}>
                       <MenuItem/>
                    </Col>
                    <Col lg={10} sm={24} xs={24}>
                        <NetProfit/>
                    </Col>
                </Row>
                <Row  gutter={[16,16]} style={{gap:"20px"}}>
                    <Col  lg={13} sm={24} xs={24}>
                     <ChartContainer/>
                    </Col>
                    <Col lg={10} sm={24} xs={24}>
                        <GoalsContainer/>
                    </Col>
                </Row>
                <Row  gutter={[16,16]} style={{gap:"20px"}}>
                    <Col  lg={13} sm={24} xs={24}>
                     <TableContainer/>
                    </Col>
                    <Col lg={10} sm={24} xs={24}>
                        <FeedBackContainer/>
                    </Col>
                </Row>
            </div>
        </StyledContent>
    )
}

export default ContentComponent
