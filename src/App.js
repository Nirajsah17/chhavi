import "./App.css";
import { useState } from "react";
import LeftNav from "./components/left-nav";
import SideBar from "./components/sidebar";
import Canvas from "./components/canvas";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="w-full h-screen flex flex-col text-fg-default">
          <div className="w-full flex max-h-12 shadow-lg">
            <NavBar></NavBar>
          </div>
          <div className="w-full flex flex-1">
            <div className="bg-bg-default shadow-lg">
              <LeftNav ></LeftNav>
            </div>
            <div className="flex flex-wrap w-80 h-full bg-bg-inset overflow-y-auto  scroll-smooth fancy-scrollbar fancy-thumb">
              <Routes>
                <Route path="/" element={<SideBar navItem="default" />} />
                <Route path="assets" element={<SideBar navItem="assets" />} />
                <Route path="/filter" element={<SideBar navItem="filter" />} />
                <Route
                  path="/settings"
                  element={<SideBar navItem="settings" />}
                />
                <Route
                  path="/free-hand"
                  element={<SideBar navItem="free-hand" />}
                />
              </Routes>
            </div>
            <div
              id="canvas"
              className="w-full bg-canvas-default border border-border-default"
            >
              <Canvas></Canvas>
            </div>
          </div>
          <div className="w-full flex max-h-12 bg-bg-default shadow-lg">
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
