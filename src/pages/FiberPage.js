import React, { Suspense } from 'react'
import { Canvas, } from '@react-three/fiber'
import Box  from '../components/Threedfiber'

const FiberPage = () => {
    return (
        <div style={{ height:"100vh"}}>
            <Suspense fallback={null}>
                    <Canvas >
            <ambientLight intensity={0.1}/>
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
    
        </Canvas>
            </Suspense>
          
        </div>
      
    )
}

export default FiberPage
