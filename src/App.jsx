import React from "react";
import { Chessboard } from "react-chessboard";
import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <div className="h-screen w-screen parentContainer">
      <section className="flex flex-col  items-center h-full w-full opacity-90">
        <Header />
        <Chessboard />
        {/* <NewChessBoard /> */}
      </section>
    </div>
  );
}

export default App;
