import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Navbar = () => {
    // Check if user is logged in and has a user cookie
    const isLoggedIn = true; // Replace with actual logic to check if user is logged in
    const username = "John Doe"; // Replace with the actual username from the user cookie

    return (
        <Header>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ fontSize: '20px' }}>
                <Menu.Item key="1" as={Link} to="/create" style={{ fontSize: '20px' }}>Create</Menu.Item>
                <Menu.Item key="2" as={Link} to="/home" style={{ fontSize: '20px' }}>Home</Menu.Item>
            </Menu>
            <div style={{ color: 'white', fontSize: '24px', textAlign: 'center' }}>Film Organizer</div>
            {isLoggedIn && (
                <div style={{ color: 'white', float: 'right', marginRight: '24px', fontSize: '20px' }}>
                    Welcome, {username}!
                </div>
            )}
        </Header>
    );
};

export default Navbar;
