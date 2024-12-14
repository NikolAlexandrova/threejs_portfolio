import React, { useRef } from 'react';
import { useGLTF, Text } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

// Fallback Material
const fallbackMaterial = new MeshStandardMaterial({
    color: 'white',
    transparent: true,
    opacity: 0.8,
});

// Cloud Component
const Cloud = (props) => {
    const { nodes, materials } = useGLTF('/models/cloud_test.glb'); // Path to the cloud model

    // Check for material availability
    const cloudMaterial = materials?.['08_-_Default'] || fallbackMaterial;

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes?.['Plane001_08_-_Default_0']?.geometry}
                material={cloudMaterial}
                position={[-0.787, 10, -5.259]} // Position above the scene
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    );
};

// Main HackerRoom Component
const HackerRoom = (props) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/models/magical_help.glb'); // Ensure the path is correct

    return (
        <group {...props} ref={group} dispose={null} scale={[0.006, 0.006, 0.006]} position={[0, -5, 0]}>
            {/* Main 3D Model */}
            <group rotation={[Math.PI / 2, 0, 0]}>
                <group rotation={[-Math.PI, 0, 0]}>
                    <group rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={100}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes?.bridge_destroyed_Bridge_0?.geometry}
                            material={materials?.Bridge}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes?.bridge_destroyed_Bridge_0_1?.geometry}
                            material={materials?.Bridge}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes?.nature_Nature_0?.geometry}
                        material={materials?.Nature}
                        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes?.water_Water_0?.geometry}
                        material={materials?.Water}
                        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes?.phantom_bridge_Magic_0?.geometry}
                        material={materials?.Magic}
                        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        scale={100}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes?.terrain_Rocks_Terrain_0?.geometry}
                        material={materials?.Rocks_Terrain}
                        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                        scale={100}
                    />
                </group>
            </group>

            {/* Add Cloud */}
            <Cloud position={[0, 30, 0]} scale={[20, 20, 20]} />


            {/* Numbers */}
            <Text
                position={[6, 7, -3]}
                fontSize={1}
                color="red"
                anchorX="center"
                anchorY="middle"
                onClick={() => alert('Tree annotation clicked!')}
            >
                1
            </Text>
            <Text
                position={[0, 2, 0]}
                fontSize={1}
                color="blue"
                anchorX="center"
                anchorY="middle"
                onClick={() => alert('Bridge annotation clicked!')}
            >
                2
            </Text>
            <Text
                position={[3, 3, 1]}
                fontSize={1}
                color="green"
                anchorX="center"
                anchorY="middle"
                onClick={() => alert('People annotation clicked!')}
            >
                3
            </Text>
        </group>
    );
};

useGLTF.preload('/models/magical_help.glb'); // Ensure the preload matches the file path
useGLTF.preload('/models/cloud_test.glb'); // Preload the cloud model
export default HackerRoom;
