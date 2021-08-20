import React from 'react';
import styled from 'styled-components';
const Header = () => {
    const Main = styled.header`
        background: 'rebeccapurple';
        background-color: #8ec5fc;
        background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
    `;
    const height = '50px';
    const DIV = styled.div`
        text-align: center;
    `;
    return (
        <>
            <Main className="w-full relative" style={{ top: '0px', height }} id="header">
                <DIV style={{ height: '100%' }}>
                    <div className="text-3xl" style={{ lineHeight: height, height: '100%' }}>
                        Home
                    </div>
                </DIV>
            </Main>
        </>
    );
};
export default Header;
