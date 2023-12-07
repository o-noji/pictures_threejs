/* eslint-disable no-unused-vars */
import "./App.css";
import { useRef } from "react";
import { useThree, useFrame, Canvas } from "@react-three/fiber";
import { useScroll, Image, ScrollControls, Scroll } from "@react-three/drei";

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3;
  });

  return (
    <group ref={group}>
      <Image url="./img01.jpg" scale={[4, height, 1]} position={[-1, 0, 1]} />
      <Image url="./img02.jpg" scale={3} position={[2, 0, 1]} />
      <Image url="./img03.jpg" scale={[1, 3.5, 1]} position={[-2.3, -height, 2]} />
      <Image url="./img04.jpg" scale={[1.4, 2, 1]} position={[1.3, -height - 0.3, 3.2]} />
    </group>
  );
}

function App() {
  return (
    <Canvas>
      <ScrollControls damping={1} pages={2} horizontal={false} infinite={false}>
        <Scroll>
          <Images />
        </Scroll>
        <Scroll html>
          <h1 style={{ position: "absolute", top: "60vh", left: "30px" }}>Practice</h1>
          <h1 style={{ position: "absolute", top: "140vh", left: "300px" }}>Three.js</h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
