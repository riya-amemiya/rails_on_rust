import React, { useEffect, useState } from 'react';
import Layout from './templates/Layout';
import styled from 'styled-components';
import { Props } from './@types';
import Button from '@material-ui/core/Button';
import { Rust } from './api';
import { FCC } from 'fcc_typescript';
const Main = React.memo(<T extends any>({ props, rust, state }: { props: Props; rust: boolean; state: T }) => {
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    return (
        <>
            <h1 className="text-2xl">Main</h1>
            <p>このサイトについて</p>
            <p>RailsをベースにレンダリングはReact</p>
            <p>処理は主にRustとCが担当(一部Python)</p>
            <Button variant="contained" color="primary">
                Click Me
            </Button>
            <div>{rust ? <>{state}</> : <></>}</div>
        </>
    );
});
const Hello = (_props: Props) => {
    const CENTER = styled.div`
        text-align: center;
    `;
    console.log(FCC.Maths.Random(8));
    const [state, setState] = useState(0);
    const [rust, setRust] = useState(false);
    useEffect(() => {
        Rust.then((n) => {
            setState(n.pow(8));
            setRust(true);
            n.rust(8);
        });
    });
    return (
        <Layout title="Home" language="ja">
            <CENTER>
                <Main props={_props} rust={rust} state={state} />
            </CENTER>
        </Layout>
    );
};
export default Hello;
