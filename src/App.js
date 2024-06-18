import "./App.css";
import { useState } from "react";
import LeftNav from "./components/left-nav";
import Canvas from "./components/canvas";

function App() {
  const [files, setFiles] = useState([]);
  const [activeBitmap, setActiveBitmap] = useState();

  const fileHandler = (file) => {
    setFiles([...files, file]);
  };
  const openFile = async (e) => {
    const filename = e.target.alt;
    const file = files.find((file) => file.name === filename);
    const bitmap = await createImageBitmap(file);
    setActiveBitmap(bitmap);
    console.log(bitmap);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full flex h-12 p-1 bg-fg-subtle"></div>
      <div className="w-full flex flex-1 p-1">
        <div className="flex flex-col w-12 border border-accent-emphasis">
          <LeftNav fileHandler={fileHandler}></LeftNav>
        </div>
        <div className="flex flex-wrap w-72 bg-bg-emphasis">
          {files.map((file) => {
            const url = URL.createObjectURL(file);
            return (
              <img
                className="p-1 w-14 h-14 rounded-sm cursor-pointer hover:border hover:border-accent-emphasis"
                src={url}
                key={file.name}
                alt={file.name}
                onClick={openFile}
              ></img>
            );
          })}
        </div>
        <div id="canvas" className="w-full bg-bg-accentEmphasis">
          <Canvas activeBitmap={activeBitmap}></Canvas>
        </div>
      </div>
      <div className="w-full flex h-12 p-1 bg-fg-subtle"></div>
    </div>
  );
}

export default App;
