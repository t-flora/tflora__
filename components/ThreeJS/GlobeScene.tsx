'use client';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Globe from './Globe';
// import { OrbitControls } from '@react-three/drei';

export default function GlobeScene() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Globe position={[-1.2, 0, 0]}/>
            <OrbitControls/>
        </Canvas>
    )
}