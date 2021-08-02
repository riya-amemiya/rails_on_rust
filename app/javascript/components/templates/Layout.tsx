import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
    url?: string;
    style?: {
        div: React.CSSProperties;
        main: React.CSSProperties;
        footer?: boolean;
    };
    id?: string;
    language?: string;
}
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
}: Props): JSX.Element => {
    const [pathName, setPathName] = useState('');
    useEffect(() => {
        setPathName(location.pathname);
    }, []);
    const DIV = styled.div`
        font-family: source-han-sans-japanese, sans-serif;
        font-weight: 400;
        font-style: normal;
    `;
    return (
        <>
            <Header />
            <Seo description={description} title={title} name={name} keyword={keyword} url={pathName} language={language} />
            <style>
                {`
                html,
                body {
                    height: 100%;
                }
                `}
            </style>
            <DIV className="_Layout-div" style={style.div}>
                <main className="_Layout-main" style={style.main} id={id}>
                    {children}
                </main>
            </DIV>
            <Footer />
        </>
    );
};
export default Layout;
