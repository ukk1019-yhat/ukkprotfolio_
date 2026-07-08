import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function GeometricForm() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { pointer, viewport } = useThree()

  useFrame(() => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += 0.003
    meshRef.current.rotation.y += 0.005
    meshRef.current.position.x +=
      (pointer.x * viewport.width * 0.15 - meshRef.current.position.x) * 0.02
    meshRef.current.position.y +=
      (-pointer.y * viewport.height * 0.15 - meshRef.current.position.y) * 0.02
  })

  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.6, 1), [])

  return (
    <mesh ref={meshRef} geometry={geo}>
      <meshStandardMaterial
        wireframe
        color="#D9A441"
        emissive="#D9A441"
        emissiveIntensity={0.2}
        metalness={0.4}
        roughness={0.6}
      />
    </mesh>
  )
}

function Scene() {
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (reducedMotion) return null

  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 5.5], fov: 40 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#D9A441" />
      <pointLight position={[-4, -2, -4]} intensity={0.5} color="#D9A441" />
      <GeometricForm />
    </Canvas>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-full">
      <Scene />
    </div>
  )
}
