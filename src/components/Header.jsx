import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="comment-title mt-16 mb-8  ">
      <div className="front text-4xl">
        <h1>Chess Royel</h1>
      </div>
      <div className="back text-4xl">
        <h1> Chess Royel</h1>
      </div>
      <div className="bar"></div>
      <div className="ball">
        <div className="bullet"></div>
      </div>
      <div className="ball">
        <div className="bullet"></div>
      </div>
    </div>
  );
}

export default Header;
