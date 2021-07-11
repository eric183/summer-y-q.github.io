import React from 'react';
import { useEffect, useMemo, useState } from 'react'

const MemoTest = () => {

    const [myData, setMyData] = useState<number | undefined>();

    const memoData = useMemo(() => {
        return 20
    }, [myData]);

    useEffect(() => {
        setTimeout(() => {
            setMyData(200);
        }, 3000)
    }, [myData])

    return (
        <div className="react-content">
            { memoData }
        </div>
    )
}

export default MemoTest