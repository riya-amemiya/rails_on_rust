import { FCC } from 'fcc_typescript';
import React from 'react';
import styled from 'styled-components';
import { Props } from '../../../@types';
import Layout from '../../../templates/Layout';

const Main_Index = ({ python }: Props) => {
    const CENTER = styled.div`
        text-align: center;
    `;

    console.log(FCC.Maths.Random(8));
    return (
        <Layout title="Home" language="ja" id="_Layout-main" url_name={''}>
            <CENTER>
                <div>
                    <h1>自己満サイト</h1>
                </div>
                <div>
                    <p>RustをWebで動かしたかっただけ</p>
                    <p>色んな技術の詰め合わせ</p>
                </div>
                <div>
                    <div>
                        <a href="./wasm">WASM</a>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Python</p>
                    </div>
                    <div>{python ? python[0] : ''}</div>
                </div>
            </CENTER>
        </Layout>
    );
};

export default Main_Index;
