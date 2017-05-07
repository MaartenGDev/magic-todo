import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;
`;

export default ({isOpen, toggleDrawer}) => {
    const handleToggle = () => toggleDrawer();
    return (
        <Drawer open={isOpen}>
            <MenuItem onTouchTap={handleToggle}><MenuLink to={'/notes'}>Notes</MenuLink></MenuItem>
            <MenuItem onTouchTap={handleToggle}><MenuLink to={'/about'}>About</MenuLink></MenuItem>
            <MenuItem onTouchTap={handleToggle}><MenuLink to={'/todo'}>Todo</MenuLink></MenuItem>
            <MenuItem onTouchTap={handleToggle}><MenuLink to={'/docs'}>Docs</MenuLink></MenuItem>
        </Drawer>
    );
}