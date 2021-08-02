import React from 'react';
import Layout from './templates/Layout';
import styled from 'styled-components';
import { Props } from './@types';
const Hello = (props: Props) => {
    const python = props.python;
    console.log('====================================');
    console.log(python);
    console.log('====================================');
    const CENTER = styled.div`
        text-align: center;
    `;
    return (
        <Layout title="Home" language="ja">
            <CENTER>
                <h1>Main</h1>
                <p>このサイトについて</p>
                <p>RailsをベースにレンダリングはReact</p>
                <p>処理は主にRustとCが担当(一部Python)</p>
            </CENTER>
        </Layout>
    );
};
export default Hello;
