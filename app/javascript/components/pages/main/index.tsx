import React, { useCallback, useState } from 'react';
import Layout from '../../templates/Layout';
import styled from 'styled-components';
//import { Props } from '../../@types';
import Button from '@material-ui/core/Button';
import { Rust } from '../../api';
import { FCC } from 'fcc_typescript';
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
const Main_Index = () => {
    const CENTER = styled.div`
        text-align: center;
    `;
    console.log(FCC.Maths.Random(8));
    return (
        <Layout title="Home" language="ja" id="_Layout-main" url_name={''}>
            <CENTER>
                <div>自己満サイト</div>
                <div>
                    <p>RustをWebで動かしたかっただけ</p>
                </div>
                <IP />
            </CENTER>
        </Layout>
    );
};
export default Main_Index;
