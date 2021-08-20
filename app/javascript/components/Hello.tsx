import React, { useEffect, useState } from 'react';
import Layout from './templates/Layout';
import styled from 'styled-components';
import { Props } from './@types';
import Button from '@material-ui/core/Button';
import { Rust } from './api';
import { FCC } from 'fcc_typescript';
interface DATA {
    ip: string;
}
const Main = React.memo(({ props, state }: { props: Props; state: any }) => {
    const [ip, setIp] = useState('');
    const [show, setShow] = useState('Show');
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    const get_ip = () => {
        Rust.then((n) => {
            n.run('https://api.ipify.org?format=json').then((data: DATA) => {
                setIp(`Your ip:${data.ip}`);
            });
        }).catch(console.error);
    };
    return (
        <>
            <h1 className="text-2xl">Main</h1>
            <p>このサイトについて</p>
            <p>RailsをベースにレンダリングはReact</p>
            <p>処理は主にRustとCが担当(一部Python)</p>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    if (show == 'Show') {
                        setShow('Hide');
                        get_ip();
                    } else {
                        setShow('Show');
                        setIp('');
                    }
                }}>
                {show} me ip
            </Button>
            <div>{ip}</div>
            <div>{state}</div>
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
    const [ComponetMain, setComponetMain] = useState(<></>);
    useEffect(() => {
        Rust.then((n) => {
            setState(n.pow(8));
            setRust(true);
        }).catch(console.error);
    }, []);
    useEffect(() => {
        setComponetMain(<Main props={_props} state={state} />);
    }, [rust]);
    return (
        <Layout title="Home" language="ja">
            <CENTER>{rust ? ComponetMain : <></>}</CENTER>
        </Layout>
    );
};
export default Hello;
