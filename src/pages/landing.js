import React from "react";
import Nav from "../components/nav";
import Trending from "../components/trending";
import Popular from "../components/popular";
import Track from "../components/track";

function Landing() {
  return (
    <>
      <Nav />
      <div className="bg-white">
        <Trending />
        <Popular />
        <Track />
      </div>
    </>
  );
}

export default Landing;
