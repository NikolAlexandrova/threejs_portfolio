// eslint-disable-next-line no-unused-vars
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';

function Hero() {
    return (
        <section className="fixed inset-0 w-screen h-screen">
            <Canvas shadows>
                <Suspense fallback={<CanvasLoader />}>
                    {/* Lights */}
                    <ambientLight intensity={0.6} />
                    <directionalLight position={[10, 60, 10]} intensity={0.5} castShadow />

                    {/* Camera */}
                    <PerspectiveCamera makeDefault position={[-20, 5, 15]} fov={32} />

                    {/* OrbitControls */}
                    <OrbitControls
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        minDistance={15}
                        maxDistance={40}
                        target={[0, 0, 0]} // Ensure focus is on the model
                    />

                    {/* 3D Model */}
                    <HackerRoom position={[0, -50, 0]} rotation={[0, Math.PI / 4, 0]} />

                    {/* Skybox Environment */}
                    <Environment
                        background
                        files="/textures/kloofendal_48d_partly_cloudy_puresky_4k.hdr"
                    />
                </Suspense>
            </Canvas>
        </section>
    );
}

export default Hero;
