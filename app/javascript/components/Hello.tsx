import React from 'react';
import Layout from './templates/Layout';
import styled from 'styled-components';
import { Props } from './@types';
import Button from '@material-ui/core/Button';
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
                <h1 className="text-red-600">Main</h1>
                <p>このサイトについて</p>
                <p>RailsをベースにレンダリングはReact</p>
                <p>処理は主にRustとCが担当(一部Python)</p>
                <Button variant="contained" color="primary">
                    Click Me
                </Button>
            </CENTER>
        </Layout>
    );
};
export default Hello;
