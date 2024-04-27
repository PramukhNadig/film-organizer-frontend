import React from 'react';
import { Layout } from 'antd';
import MyRolls from '../components/MyRolls';
import Navbar from '../components/Navbar'; // Import the custom Navbar component

const { Header, Content } = Layout;

const MyRollsPage = () => {
    return (
        <Layout>
            <Header>
                <Navbar /> {/* Replace the default Menu component with the custom Navbar component */}
            </Header>
            <Content style={{ padding: '50px' }}>
                <MyRolls />
            </Content>
        </Layout>
    );
};

export default MyRollsPage;
