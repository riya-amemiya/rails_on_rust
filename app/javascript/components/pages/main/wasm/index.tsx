import Button from '@material-ui/core/Button';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Rust } from '../../../api';
import Layout from '../../../templates/Layout';
interface DATA {
    ip: string;
}
const IP = React.memo(() => {
    const [ip, setIp] = useState('');
    const [show, setShow] = useState('Show');
    const get_ip = () => {
        Rust.then((n) => {
            setIp(`読み込み中`);
            n.run('https://api.ipify.org?format=json').then((data: DATA) => {
                setIp(`Your ip:${data.ip}`);
            });
        }).catch(console.error);
    };
    const onClick = useCallback(() => {
        if (show == 'Show') {
            setShow('Hide');
            get_ip();
        } else {
            setShow('Show');
            setIp('');
        }
    }, [show]);
    return (
        <>
            <Button variant="contained" color="primary" onClick={onClick}>
                {show} me ip
            </Button>
            <div>{ip}</div>
        </>
    );
});
const Wasm_Index = () => {
    const CENTER = styled.div`
        text-align: center;
    `;
    return (
        <Layout title={'WASM'} url_name={'wasm'} language="ja" id="_Layout-wasm">
            <CENTER>
                <h1>WASM</h1>
                <div>
                    <IP />
                </div>
            </CENTER>
        </Layout>
    );
};
export default Wasm_Index;
