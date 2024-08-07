import React, { useState,useContext } from 'react'
import { Menu, Layout } from 'antd';
import { BiSolidBarChartSquare, BiTask } from "react-icons/bi";
import { IoBagCheck } from "react-icons/io5";
import { HomeFilled, WalletOutlined, LogoutOutlined } from "@ant-design/icons";
import { styledIcon } from './reusableComponents/reusableComponents';
import { LogountContainer, LogoutBtn } from './styledComponents/styleComponents';
import { MyContext } from '../components/contextapi';
const { Sider } = Layout;

const Sidebar = () => {
    const {collapsed,setCollapsed,broken,setBroken} = useContext(MyContext)
    const [collapsedWidth,setCollapsedWidth] = useState("80px");
    const [positon,setPosition] = useState("relative");
    return (
        <Sider theme='dark' style={{ height: 'calc(100vh - 64px)',position:positon ,zIndex:'222'}} collapsed={collapsed}  breakpoint="lg"    collapsedWidth={collapsedWidth}
        onBreakpoint={(broken) => {
            setBroken(broken);
            broken ? setCollapsedWidth("0px") : setCollapsedWidth("80px");
            broken ? setPosition("absolute") : setPosition("relative");
        }}
        onCollapse={(collapsed, type) => {
            setCollapsed(collapsed);
        }}>
            
            <Menu   
        theme="dark"
      
            defaultSelectedKeys={['home']}
                items={[
                    { label: 'Home', icon: styledIcon(<HomeFilled />),key:"home" },
                    { label: 'Activity', icon: styledIcon(<BiSolidBarChartSquare />),key:"activity" },
                    { label: 'Notes', icon: styledIcon(<BiTask />),key:"noted" },
                    { label: 'Wallet', icon: styledIcon(<WalletOutlined />),key:"wallet" },
                    { label: 'Orders', icon: styledIcon(<IoBagCheck />),key:"orders" }
                ]} style={{marginTop :"15px",color: '#929294', fontSize: '18px', fontWeight: '700'}} >
            </Menu>
            <LogountContainer>
                <LogoutBtn>
                    <LogoutOutlined />
                </LogoutBtn>
            </LogountContainer>
        </Sider>
    )
}

export default Sidebar
