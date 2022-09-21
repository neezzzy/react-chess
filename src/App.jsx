import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Board from "./components/Board";
import { observe } from "./components/Game";

function App() {
  // since all that is needed in this simple demo is a stream of values, entire app is wrapped by an observer that subscribes to a changing state in the most minimal, non-complex way (rather than using EventEmitter or making Game an object model)
  const [knightPosition, setKnightPosition] = useState([1, 7]);
  // the observe function will return an unsubscribe callback
  useEffect(() => observe((newPosition) => setKnightPosition(newPosition)));
  return (
    <DndProvider backend={HTML5Backend}>
      <Board knightPosition={knightPosition} />
    </DndProvider>
  );
}

export default App;
