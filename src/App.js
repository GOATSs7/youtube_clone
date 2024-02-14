import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import LoadingBar from "react-top-loading-bar";
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route
          path="/"
          element={<Home sidebar={sidebar} setProgress={setProgress} />}
        />
        <Route
          path="/video/:categoryId/:videoId"
          element={<Video setProgress={setProgress} />}
        />
      </Routes>
    </div>
  );
};

export default App;
