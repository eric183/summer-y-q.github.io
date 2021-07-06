import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { ResumeStyle } from '~styles';
import { css } from '@emotion/react';
import LoadingLayout from '~components/loading';

const Sample = () => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setLoading(false);
    }, []);
    // const test = 'Work Experience';
    const test = 'Test NoBusyDoingThings';
    return (
        <ResumeStyle>
            <Helmet>
                <link href="https://fonts.font.im/css?family=Noto+Sans" rel="stylesheet" />
            </Helmet>
            <LoadingLayout loading={loading} /> 
            <article>
                <header className="">
                    <h1>xxx</h1>
                    <p>fff/ddd</p>
                    {/* <p>xxx</p> */}
                    {/* clear-anchor-style */}
                    <ul className="flex-row flex-justify-around">
                        <li>
                            <i className='happy-icon'>&#xe900;</i>
                            23456
                        </li>
                        <li>
                            <i className='happy-icon'>&#xe8e3;</i>
                            jaidfojfao@gmail.com
                        </li>
                        <li>
                            <i className='happy-icon'>&#xe8fc;</i>
                            net.happylandle.club
                        </li>
                        <li>
                            <i className='happy-icon'>&#xe8ef;</i>
                            <a href='https://github.com/eric183' target='_blank'>EricKuang</a>
                        </li>
                    </ul>
                </header>
                <section className="block-section">
                    <h2><span>{test.slice(0, 3)}</span>{test.slice(3)}</h2>

                </section>
                {/* <section className="block-section">
                    <h2>
                        <span>{test.slice(0, 3)}</span>{test.slice(3)}
                    </h2>
                </section> */}
            </article> 
        </ResumeStyle>
    )
}

export default Sample;
