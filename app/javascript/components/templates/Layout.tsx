import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { API } from '../api';
import Footer from './Footer';
import Header from './Header';
import Seo from './Seo';
interface Props {
    children: React.ReactNode;
    title: string;
    description?: string;
    author?: string;
    siteUrl?: string;
    keyword?: string;
    name?: string;
    url_name: string;
    style?: {
        div: React.CSSProperties;
        main: React.CSSProperties;
        footer?: boolean;
    };
    id?: string;
    language?: string;
}
const Main = React.memo((props: { component: React.ReactNode }) => {
    return <>{props.component}</>;
});
const Layout = ({
    children,
    description = '',
    title = '',
    name = '',
    keyword = '',
    style = {
        div: {
            margin: `0px 0px 0px`,
            padding: `0`,
        },
        main: {},
        footer: true,
    },
    id = '',
    language = 'ja',
    url_name = '',
}: Props): JSX.Element => {
    const [pathName, setPathName] = useState('');
    useEffect(() => {
        if (API.check_window()) {
            setPathName(`${url_name}`);
        }
    }, []);
    const DIV = styled.div`
        font-family: source-han-sans-japanese, sans-serif;
        font-weight: 400;
        font-style: normal;
    `;
    return (
        <>
            <div id="_Layout">
                <Header />
                <Seo
                    description={description}
                    title={title}
                    name={name}
                    keyword={keyword}
                    url={pathName}
                    language={language}
                />
                <style>
                    {`
                html,
                body {
                    height: 100%;
                }
                `}
                </style>
                <DIV id="_Layout-div" style={style.div}>
                    <main className="" style={style.main} id={id}>
                        <Main component={children} />
                    </main>
                </DIV>
                <Footer />
            </div>
        </>
    );
};
export default Layout;
