import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Cube } from "./components/Cube";

const AppWrapper = styled.div`
  background-color: #b892df;
`;

function App() {
  return (
    <AppWrapper className="flex justify-center items-center h-screen w-screen flex-col">
      <div className="flex  items-center gap-2 flex-col">
        <Canvas>
          <Cube />
        </Canvas>
        <h1>R3F Starter Project</h1>
        <h2>w/ styled-components and tailwind</h2>
      </div>
    </AppWrapper>
  );
}

export default App;
