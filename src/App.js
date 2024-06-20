import "./App.css";
import { useState } from "react";
import LeftNav from "./components/left-nav";
import SideBar from "./components/sidebar";
import Canvas from "./components/canvas";
import NavBar from "./components/navbar";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [files, setFiles] = useState([]);
  const [activeBitmap, setActiveBitmap] = useState();

  const fileHandler = (file) => {
    setFiles([...files, ...file]);
  };
  const openFile = async (e) => {
    const filename = e.target.alt;
    const file = files.find((file) => file.name === filename);
    const bitmap = await createImageBitmap(file);
    setActiveBitmap(bitmap);
    console.log(bitmap);
  };

  return (
    <>
      <Router>
        <div className="w-full h-screen flex flex-col">
          <div className="w-full flex h-12 p-1 border border-b border-fg-default">
            <NavBar></NavBar>
          </div>
          <div className="w-full flex flex-1 p-1">
            <div className="flex flex-col w-12">
              <LeftNav fileHandler={fileHandler}></LeftNav>
            </div>
            <div className="flex flex-wrap w-72 h-full border border-fg-default">
              <Routes>
                <Route path="/" element={<SideBar navItem="default" />} />
                <Route path="assets" element={<SideBar navItem="assets" files={files} openFile={openFile}/>} />
                <Route path="/filter" element={<SideBar navItem="filter"/>} />
                <Route path="/settings" element={<SideBar navItem="settings"/>} />
                <Route path="/free-hand" element={<SideBar navItem="free-hand"/>} />
              </Routes>
            </div>
            <div id="canvas" className="w-full bg-bg-accentEmphasis">
              <Canvas activeBitmap={activeBitmap}></Canvas>
            </div>
          </div>
          <div className="w-full flex h-12 p-1 border border-t border-fg-default"></div>
        </div>
      </Router>
    </>
  );
}

export default App;
