import React, { FC } from 'react';
import CanvasLayout from '~components/CanvasLayout';

const DDA: FC = () => {
    return (
        <CanvasLayout wrapperStyle={{ backgroundColor: '#eee' }}>
            <fog attach="fog" args={['lightpink', 60, 100]} />
        </CanvasLayout>
    )
}

export default DDA;