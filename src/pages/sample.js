import React, { useEffect} from 'react';
import Helmet from 'react-helmet';
import { LayoutStyle, ResumeStyle } from '~styles';
import { css } from '@emotion/react';

const Sample = () => {
    useEffect(() => {

    }, []);
    const test = 'Work Experience';
    return (
        <ResumeStyle>
            <Helmet>
                <link href="https://fonts.font.im/css?family=Noto+Sans" rel="stylesheet" />
            </Helmet>
            <article>
                <header className="">
                    <h1></h1>
                    <p></p>
                    <p></p>
                    <ul className="flex-row">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </header>
                <section className="">
                    <h2>
                        <span css={css`color: red;`}>{test.split(test[3])[0]}</span>
                        {test.slice(3)}
                        {/* <span>Wor</span>k Experience */}
                    </h2>
                </section>
            </article> 
        </ResumeStyle>
    )
}

export default Sample;
