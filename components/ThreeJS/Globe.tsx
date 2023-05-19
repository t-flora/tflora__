'use client';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';

export default function Globe(props: any) {
    const ref = useRef();
    const [hovered, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);

    useFrame((_, delta)=>(ref.current.rotation.x += delta))
    return (
        <mesh
            {...props}
            ref={ref}
            onClick={(e) => setClicked(true)}
            onPointerOver={(e)=>setHover(true)}
            onPointerOut={(e)=>setHover(false)}>
            {/* Geometry component */}
            <sphereGeometry />
            {/* Mesh material */}
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}