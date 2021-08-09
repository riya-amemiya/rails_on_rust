import React, { useEffect, useState } from 'react';
import Layout from './templates/Layout';
import styled from 'styled-components';
import { Props } from './@types';
import Button from '@material-ui/core/Button';
import { MODULES } from './modules';
import { Rust } from './api';
const Hello = (props: Props) => {
    console.log('====================================');
    console.log(props.python);
    console.log('====================================');
    const module = new MODULES();
    const url = module.get_url;
    if (url) {
        module.fetch(`${url.origin}/api`, (n: { data: string }) => {
            console.log('====================================');
            console.log(n.data);
            console.log('====================================');
        });
    }
    const CENTER = styled.div`
        text-align: center;
    `;
    const [state, setState] = useState(0);
    const [rust, setRust] = useState(false);
    useEffect(() => {
        Rust.then((n) => {
            setState(n.pow(8));
            setRust(true);
        });
    }, []);
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
                <div>{rust ? <>{state}</> : <></>}</div>
            </CENTER>
        </Layout>
    );
};
export default Hello;
