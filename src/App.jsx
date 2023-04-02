import React from "react";
import Header from "./Header.jsx";
import app from "./app.css"
import Buttons from "./Buttons.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx"


function App() {
  return (
      <>
          <div className="container">
              <Header />
              <Buttons />
              <Body />
              <Footer />
          </div>
          <p className="space"></p></>
  )
}

export default App
