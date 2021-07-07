import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { ResumeStyle } from '~styles';
import { css } from '@emotion/react';
import Scrollbar from '~components/scrollbar';
import LoadingLayout from '~components/loading';
import html2pdf from 'html2pdf.js'

const Sample = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);

    }, []);
    // const test = 'Work Experience';
    const test = 'Test NoBusyDoingThings';
    return (
        <Scrollbar>
            <ResumeStyle>
                <Helmet>
                    <link href="https://fonts.font.im/css?family=Noto+Sans" rel="stylesheet" />
                </Helmet>
                <LoadingLayout loading={loading} />
                <article className='print-layout'>
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
                        <div className='work-fragment flex-row flex-justify-between'>
                            <h3>中正科技有限公司</h3>
                            <h3>前端</h3>
                            <h3>2021.01.01 - 2020.04.27</h3>
                        </div>

                    </section>
                    <section className="block-section">
                        <h2><span>{test.slice(0, 3)}</span>{test.slice(3)}</h2>
                        <div className='work-fragment flex-row flex-justify-between'>
                            <h3>中正科技有限公司</h3>
                            <h3>前端</h3>
                            <h3>2021.01.01 - 2020.04.27</h3>
                        </div>

                    </section>
                    <section className="block-section">
                        <h2><span>{test.slice(0, 3)}</span>{test.slice(3)}</h2>
                        <div className='work-fragment flex-row flex-justify-between'>
                            <h3>中正科技有限公司</h3>
                            <h3>前端</h3>
                            <h3>2021.01.01 - 2020.04.27</h3>
                        </div>

                    </section>
                    <section className="block-section">
                        <h2><span>{test.slice(0, 3)}</span>{test.slice(3)}</h2>
                        <div className='work-fragment flex-row flex-justify-between'>
                            <h3>中正科技有限公司</h3>
                            <h3>前端</h3>
                            <h3>2021.01.01 - 2020.04.27</h3>
                        </div>

                    </section>
                    <section className="block-section">
                        <h2><span>{test.slice(0, 3)}</span>{test.slice(3)}</h2>
                        <div className='work-fragment flex-row flex-justify-between'>
                            <h3>中正科技有限公司</h3>
                            <h3>前端</h3>
                            <h3>2021.01.01 - 2020.04.27</h3>
                        </div>

                    </section>
                    <section className="block-section">
                        <h2><span>{test.slice(0, 3)}</span>{test.slice(3)}</h2>
                        <div className='work-fragment flex-row flex-justify-between'>
                            <h3>中正科技有限公司</h3>
                            <h3>前端</h3>
                            <h3>2021.01.01 - 2020.04.27</h3>
                        </div>

                    </section>
                    <section className="block-section">
                        <h2><span>{test.slice(0, 3)}</span>{test.slice(3)}</h2>
                        <div className='work-fragment flex-row flex-justify-between'>
                            <h3>中正科技有限公司</h3>
                            <h3>前端</h3>
                            <h3>2021.01.01 - 2020.04.27</h3>
                        </div>

                    </section>
                    <section className="block-section">
                        <h2><span>{test.slice(0, 3)}</span>{test.slice(3)}</h2>
                        <div className='work-fragment flex-row flex-justify-between'>
                            <h3>中正科技有限公司</h3>
                            <h3>前端</h3>
                            <h3>2021.01.01 - 2020.04.27</h3>
                        </div>

                    </section>
                    {/* <section className="block-section">
                    <h2>
                        <span>{test.slice(0, 3)}</span>{test.slice(3)}
                    </h2>
                </section> */}
                </article>
            </ResumeStyle>
        </Scrollbar>
    )
}

export default Sample;
