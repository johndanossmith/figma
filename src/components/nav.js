import React from "react";
import logo from "../assets/LP images/Lalals Logo 1.png";
import endlogo from "../assets/LP images/Ellipse 5.png";
import star from "../assets/LP images/star.png";
import weekend from "../assets/LP images/ai voice.png";

function Nav() {
  return (
    <div className="bg-nav bg-cover w-screen h-height1">
      <div className="navbar bg-nav">
        <div className="flex-none">
          <img src={logo} alt="logo" className="pl-24 pt-8" />
        </div>
        <div className="flex-none pt-8 pl-24">
          <button className="btn btn-ghost normal-case text-xl text-slate-800">
            AI Voices
          </button>
        </div>
        <div className="flex-none pt-8 pl-12">
          <button className="btn btn-ghost normal-case text-xl text-slate-800">
            Pricing
          </button>
        </div>
        <div className="flex-1 pt-8 pl-12">
          <button className="btn btn-ghost normal-case text-xl text-slate-800">
            Tools
          </button>
        </div>
        <div className="flex-none">
          <img src={endlogo} alt="logo" className="pr-12 pt-8" />
        </div>
      </div>
      <div className="flex">
        <div className="flex-col w-1/2">
          <div className="flex pt-20 pl-24">
            <img src={star} alt="star" className="py-2" />
            <div className="text-3xl pl-4">
              4.8/5 Rated • 100K+ Users • 1K+ AI Voices
            </div>
          </div>
          <div className="pl-24 pt-4 text-6xl text-black">
            Change Your Voice with AI
          </div>
          <div className="pl-24 pt-4 text-3xl">
            #1 AI Voice Changer. Imitate the voices of top artists and
            celebrities.
          </div>
          <div className="flex pl-24 pt-4">
            <div className="join w-2/3">
              <input
                className="input bg-white join-item flex-1"
                placeholder="Search for a voice..."
              />
            </div>
            <div className="indicator w-1/5">
              <button className="btn join-item bg-blue-600 w-full" />
            </div>
          </div>
        </div>
        <div className="flex w-1/2">
          <img src={weekend} alt="weekend" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
