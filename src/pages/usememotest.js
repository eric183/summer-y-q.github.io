import { useEffect, useMemo, useState } from 'react'

const memoTest = () => {

    const [myData, setMyData] = useState();

    const memoData = useMemo(() => {
        return 20
    }, [myData]);

    useEffect(() => {
        setTimeout(() => {
            setMyData(200);
        }, 3000)
    }, [])

    return (
        <div className="react-content">
            { memoData}
        </div>
    )
}