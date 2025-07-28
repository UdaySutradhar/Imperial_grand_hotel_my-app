import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage1 from "./components/HomePage1";
import HomePage2 from "./components/HomePage2";

function App() {
  const [homeVersion, setHomeVersion] = useState("home1");
  return (
    <div>
      <Navbar
        homeVersion={homeVersion}
        onSelectHome={setHomeVersion}
      />
      {homeVersion === "home1" ? <HomePage1 /> : <HomePage2 />}
      <Footer />
    </div>
  );
}
export default App;
