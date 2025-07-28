import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage1 from "./components/HomePage1";
import HomePage2 from "./components/HomePage2";
import Footer from "./components/Footer";

function App() {
  // Track which home page is active
  const [homeVersion, setHomeVersion] = useState("home1");

  return (
    <>
      <Navbar homeVersion={homeVersion} onSelectHome={setHomeVersion} />
      {homeVersion === "home1" ? <HomePage1 /> : <HomePage2 />}
      <Footer />
    </>
  );
}
export default App;
