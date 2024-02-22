import { useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    <Suspense fallback={<CanvasLoader />}>
      <Canvas>
        <mesh
          scale={[0.35, 0.35, 0.35]}
          position={[0, -1, 0]}
          rotation={[0, -1.6, -0.2]}
        >
          <hemisphereLight intensity={0.15} groundColor={'black'} />
          <pointLight intensity={1} />
          {/* <directionalLight position={[-0, 3, 2]} intensity={0.9} />
          <ambientLight intensity={0.8} /> */}
          <primitive object={computer.scene} />
        </mesh>
      </Canvas>
    </Suspense>
  );
};

export default Computers;
