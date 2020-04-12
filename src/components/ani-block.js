import React from 'react'

export default (props) => {

    // var aniVal = props.data.aniVal;

    // var data = "data"
    // console.log(aniVal);

    return (
        <div {...props} >
            {props.children}
        </div>
    )
}