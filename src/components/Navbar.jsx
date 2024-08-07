import React, { useContext, useState, useEffect } from 'react'
import { MyContext } from '../components/contextapi';
import { LogoIcon, SearchBar, Input,Dropdown,CustomDrawer } from './styledComponents/styleComponents';
import { IoGrid } from "react-icons/io5";
import { SearchOutlined, MailOutlined, SettingOutlined,MenuOutlined } from '@ant-design/icons';
import { IoMdNotificationsOutline } from "react-icons/io";
import { Layout, Menu, Drawer } from 'antd';
import { styledNavIcon, userLogo } from './reusableComponents/reusableComponents'
import employe from '../assets/employe.jpg'
const { Header } = Layout
const Navbar = () => {
    const { collapsed, setCollapsed, broken, setBroken, collapsedWidth } = useContext(MyContext);
    const items = [
        { icon: styledNavIcon(<MailOutlined />), key: "email" ,label:'Email'
        },
        { icon: styledNavIcon(<SettingOutlined />), key: "settings" ,label:'Settings'},
        { icon: styledNavIcon(<IoMdNotificationsOutline />), key: "notification",label:'Notification' },
        { icon: userLogo(employe), key: 'user',label:'Theja' }
    ]
    const [visible, setVisible] = useState(false);
    const [menuBar, setMenuBar] = useState('flex');
    const [navMenu,setNavMenu] = useState('none')
    useEffect(() => {
        if (!broken){
            setMenuBar("flex")
            setNavMenu('none')
        } 
        else{
            setMenuBar('none')
            setNavMenu('flex')
        } 
    }, [collapsed])
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <Header style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0px 20px',
            columnGap:'25px'

        }}>

            {!broken ? <LogoIcon><IoGrid onClick={() => setCollapsed(!collapsed)} /></LogoIcon> : ""}
            <SearchBar mleft={broken ? '0px' : ""}>
                <SearchOutlined style={{ fontSize: '17px' }} />
                <Input type="search" placeholder='Search' />
            </SearchBar>
            <CustomDrawer
                placement="top"
                onClose={onClose}
                open={visible}
                style={{backgroundColor:'rgb(0,21,41)',maxHeight:'3 00px'}}
            >
                <Menu
                    theme="dark"
                    mode="vertical"
                    items={items}
                    style={{ display: 'flex', alignItems: 'center',flexDirection:'column',rowGap:'20px', justifyContent: 'center', width: '100%' }}
                />
            </CustomDrawer>
            <Dropdown onClick={showDrawer} display={navMenu}>
                <MenuOutlined/>
            </Dropdown>
            <Menu
                theme="dark"
                mode="horizontal"
                items={items}
                className='horizontalNav'
                style={{ display: menuBar, alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}
            />

        </Header>
    )
}

export default Navbar
