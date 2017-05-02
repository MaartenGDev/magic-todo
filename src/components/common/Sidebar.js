import React from 'react';
import styled from 'styled-components';

import NavigationItem from '../common/NavigationItem';

const Sidebar = styled.nav`
  height: 100vh;
  width: 200px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  display: inline-block;
`;

const NavigationList = styled.ul`
    padding: 0;
    margin: 0;
`;

export default () => {
    return (
        <Sidebar>
            <nav>
                <NavigationList>
                    <NavigationItem to={'/about'}>About</NavigationItem>
                    <NavigationItem to={'/todo'}>Todo</NavigationItem>
                    <NavigationItem to={'/docs'}>Docs</NavigationItem>
                </NavigationList>
            </nav>
        </Sidebar>
    );
}