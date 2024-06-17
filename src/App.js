import "./App.css";
import { Stage, Layer, Rect, Text } from "react-konva";
import { useEffect, useState } from "react";

function App() {
  const [dims, setDims] = useState({ width: 200, height: 200 });
  useEffect(() => {
    const el = document.getElementById("canvas");
    setDims({ width: el.clientWidth, height: el.clientHeight });
  }, []);

  const onDown = (e) => {
    console.log(e);
  };

  const onUp = (e) => {
    console.log(e);
  };

  const onMove = (e) => {
    console.log(e);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full flex h-12 p-1 bg-fg-subtle"></div>
      <div className="w-full flex flex-1 p-1">
        <div className="w-12 border border-accent-emphasis"></div>
        <div className="w-72 bg-bg-emphasis"></div>
        <div id="canvas" className="w-full bg-bg-accentEmphasis">
          <Stage
            width={dims.width}
            height={dims.height}
            onMouseDown={onDown}
            onMouseUp={onUp}
            onMouseMove={onMove}
          >
            <Layer>
              <Rect
                x={10}
                y={10}
                width={50}
                height={50}
                fill="black"
                draggable
              />
            </Layer>
          </Stage>
        </div>
      </div>
      <div className="w-full flex h-12 p-1 bg-fg-subtle"></div>
    </div>
  );
}

export default App;
