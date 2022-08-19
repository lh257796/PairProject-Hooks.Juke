import React from "react";
import Sidebar from './components/Sidebar';
import Player from "./components/Player";
import AllAlbums from "./components/AllAlbums";

const Main = () => {
  return (
    <div id="main" className="row container">
      <Sidebar />
      <div className='container'>
        <AllAlbums />
      </div>
      <Player />
    </div>
  );
};

export default Main;
