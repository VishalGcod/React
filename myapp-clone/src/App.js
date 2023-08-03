import React, { Component } from "react";
import "./App.css";
// import { Apis, Header } from "./reactPart2";
import { Formdta, Par } from "./form";
import itachi from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";
import { Fill } from "./practiceasses3";
import { Flexdiv } from "./practiceasses3";
import { Disp } from "./newtry";
import { Next } from "./next";
import { Posting } from "./post ";
import { Home } from "./axiosrequests";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Buyproduct, Login, About, NavTxt } from "./routecomp";
import { LifecycleA } from "./LifecycleA";
import NotFound from "./routecomp";
import { useState } from "react";
import { thunk } from "redux-thunk";

function App() {
    const [cartitem, setcartitems] = useState([]);
  return (
    <div className="App">
      {/* <Router>
          <NavTxt cartitem={cartitem}/>
      <Switch>
          <Route exact path="/">
            <Home setcartitems={setcartitems} cartitem={cartitem}/>
          </Route>
          <Route path="/login">
            <Formdta />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/cart">
            <Buyproduct cartitem={cartitem} setcartitems={setcartitems}/>
          </Route>
          <Route component={NotFound} />
        </Switch> 
      </Router> */}
      <Disp/>
      {/* <Par/>  */}
      {/* <Formdta/> */}
      {/* <Header/> */}
      {/* <div> */}
      {/* <Fill/> */}
      {/* </div> */}
      {/* <Apis/> */}
      {/* <StarRating rating={rating} onChange={handleRatingChange} /> */}
      {/* <p>Current Rating: {rating}</p> */}
      {/* <Next/> */}
      {/* <Posting/> */}
      {/* <Home /> */}
      {/* <LifecycleA/> */}
    </div>
  );
  }
export default App;
