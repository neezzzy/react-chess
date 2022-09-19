import Board from "./components/Board";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex: 1;
  background-color: rgb(36, 35, 32);
`;

function App() {
  const [state, setState] = useState({
    player: "w",
  });

  return (
    <Container>
      <div style={{ width: "100vh" }}>
        <Board />
      </div>
    </Container>
  );
}

export default App;
