import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/movies/Movies";
import debug from "sabio-debug";

const _logger = debug.extend("App");
function App() {
  const [currentUser] = useState({
    firstName: "",
    isLoggedIn: false,
    lastName: "",
  });

  function submitBtnCLiked() {
    console.log("Clicking");
  }

  _logger("Something important somewhere in a function within your component");

  return (
    <React.Fragment>
      <SiteNav user={currentUser}></SiteNav>
      {/*Allows tochange the url*/}

      <div className="container ">
        <Routes>
          <Route path="/" element={<Home user={currentUser} />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Routes>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
