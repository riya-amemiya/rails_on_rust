import React from 'react';
import styled from 'styled-components';
import Link from './Link';
const Footer = () => {
    const Footer_main = styled.footer`
        /*未訪問のリンクの色*/
        a:link {
            color: #0000ff;
        }
        /*訪問済みのリンクの色*/
        a:visited {
            color: #ee4444;
        }
    `;
    return (
        <Footer_main className="text-center">
            <div>
                <div>
                    <p>
                        Framework:{' '}
                        <span>
                            <Link url="https://rubyonrails.org/">Rails</Link>
                        </span>
                    </p>
                    <p>
                        Library:{' '}
                        <span>
                            <Link url="https://ja.reactjs.org/">React</Link>
                        </span>
                    </p>
                    <p>
                        Data Processing:{' '}
                        <span>
                            <Link url="https://www.rust-lang.org/ja">Rust</Link>
                        </span>
                        ,
                        <span>
                            <Link url="https://ja.wikipedia.org/wiki/C%E8%A8%80%E8%AA%9E">C/C++</Link>
                        </span>
                        ,
                        <span>
                            <Link url="https://www.python.org/">Python</Link>
                        </span>
                    </p>
                </div>
            </div>
        </Footer_main>
    );
};
export default Footer;
