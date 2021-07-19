import { OrbitControls } from '@react-three/drei';
import React from 'react';
import CanvasLayout from '~components/CanvasLayout';

export default () => (
    <CanvasLayout wrapperStyle={{ background: '#eee' }}>
        <group>
            <mesh>
                <boxBufferGeometry args={[2, 2, 2]} />
                <meshNormalMaterial />
            </mesh>
        </group>
        <OrbitControls />
    </CanvasLayout>
);