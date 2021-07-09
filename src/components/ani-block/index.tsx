import React, { FC } from 'react'

const AniBlock: FC = (props) => {

    // var aniVal = props.data.aniVal;

    // var data = "data"
    // console.log(aniVal);

    return (
        <div {...props} >
            {props.children}
        </div>
    )
}

export default AniBlock;