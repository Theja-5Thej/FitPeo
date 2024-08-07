import React, {useState } from 'react'
import Sidebar from '../components/sidebar';
import { Layout } from 'antd';
import Navbar from '../components/Navbar';
import { MyContext } from '../components/contextapi';
import ContentCompo from '../components/ContentComponent'
const {Content} =Layout 
const Homepage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [broken,setBroken]= useState(false)

    return (
        <MyContext.Provider value={{collapsed,setCollapsed,broken,setBroken}}>
            <Layout>
                <Navbar />
                <Layout>
                    <Sidebar />
                    <ContentCompo/>
                </Layout>
            </Layout>
        </MyContext.Provider>


    )
}

export default Homepage
