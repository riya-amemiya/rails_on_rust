import { AppBar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
const Header = () => {
    const DIV = styled.div`
        text-align: center;
    `;
    return (
        <>
            <AppBar>
                <DIV>header</DIV>
            </AppBar>
            ;
        </>
    );
};
export default Header;
