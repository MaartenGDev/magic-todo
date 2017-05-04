import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';

const Container = styled(Paper)`
    width: calc(100% - 40px);
    margin: 10px auto 0 auto;
    padding: 10px;
`;

export default ({children}) => {
    return (
        <Container zDepth={1} children={children}/>
    );
};