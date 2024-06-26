import React from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
