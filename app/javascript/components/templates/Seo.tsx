import React from 'react';
import Helmet from 'react-helmet';
type MetaProps = JSX.IntrinsicElements['meta'];
interface Props {
    description?: string;
    meta?: MetaProps;
    title?: string;
    name?: string;
    keyword?: string;
    url?: string;
    language?: string;
}
const Seo = React.memo(({ description = '', title = '', name = '', keyword = '', url = '', language = 'ja' }: Props) => {
    return (
        <Helmet>
            <html lang={language || 'ja'}></html>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keyword} />
            <meta itemProp="name" content={name} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={name} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:locale" content="ja_JP" />
            <meta property="og:type" content="website" />
            <link rel="canonical" href={`https://stunning-everglades-83919.herokuapp.com/${url}`} />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>
    );
});
export default Seo;
