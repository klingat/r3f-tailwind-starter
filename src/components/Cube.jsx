import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, RoundedBox } from "@react-three/drei";
import { useRef } from "react";

// function to generate random hex color

const color1 = "mediumpurple";
const color2 = "green";

export const Cube = () => {
  const cube = useRef();
  const [color, setColor] = useState(color1);

  useFrame((_, delta) => {
    cube.current.rotation.y += delta * 0.2;
  });

  const eventHandler = () => {
    const nextColor = color === color1 ? color2 : color1;
    cube.current.material.color.set(nextColor);
    setColor(nextColor);
  };

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {/* <mesh ref={cube} scale={3} onClick={eventHandler}>
        <boxGeometry />
        <meshStandardMaterial color={color1} />
      </mesh> */}
      <RoundedBox
        args={[3, 3, 3]}
        radius={0.5}
        smoothness={4}
        onClick={eventHandler}
        ref={cube}
      >
        <meshStandardMaterial color={color1} />
      </RoundedBox>
    </>
  );
};
