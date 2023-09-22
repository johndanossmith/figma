import React from "react";
import ellipse from "../assets/LP images/Ellipse 14.png";
import trending from "../assets/LP images/trending.png";
import voicepic from "../assets/LP images/Voice Pic.png";
import polygon from "../assets/LP images/Polygon 5.png";
import voicepic1 from "../assets/LP images/Voice Pic (1).png";
import voicepic2 from "../assets/LP images/Voice Pic (3).png";
import voicepic3 from "../assets/LP images/Voice Pic (6).png";
import left from "../assets/LP images/Group 63.png";
import right from "../assets/LP images/Group 64.png";

function Trending() {
  return (
    <div className="flex-col pt-12 pb-12">
      <div className="flex pr-24 pl-24 justify-between">
        <div className="flex">
          <div>Trending AI Voices</div>
          <img src={ellipse} alt="ellipse" className="pl-6 py-2" />
          <div className="pl-4">8 New AI Voices</div>
          <img src={trending} alt="trending" className="pl-4 py-2" />
        </div>
        <div className="flex">See all</div>
      </div>
      <div className="flex pt-12 justify-between">
        <div className="flex">
          <img src={left} alt="left" className="z-10 py-16 pl-16" />
          <div className="flex-col absolute left-24 z-0">
            <img src={voicepic} alt="voicepic" />
            <div className="flex">
              <div className="text-black">Drake</div>
              <img src={polygon} alt="polygon" className="pl-4 py-2" />
            </div>
            <div>128K uses · Inspired</div>
          </div>
        </div>
        <div className="flex-col pl-24">
          <img src={voicepic1} alt="voicepic" />
          <div className="flex">
            <div className="text-black">Drake</div>
            <img src={polygon} alt="polygon" className="pl-4 py-2" />
          </div>
          <div>128K uses · Inspired</div>
        </div>
        <div className="flex-col">
          <img src={voicepic2} alt="voicepic" />
          <div className="flex">
            <div className="text-black">Drake</div>
            <img src={polygon} alt="polygon" className="pl-4 py-2" />
          </div>
          <div>128K uses · Inspired</div>
        </div>
        <div className="flex-col">
          <img src={voicepic3} alt="voicepic" />
          <div className="flex">
            <div className="text-black">Drake</div>
            <img src={polygon} alt="polygon" className="pl-4 py-2" />
          </div>
          <div>128K uses · Inspired</div>
        </div>
        <div className="flex-col">
          <img src={voicepic2} alt="voicepic" />
          <div className="flex">
            <div className="text-black">Drake</div>
            <img src={polygon} alt="polygon" className="pl-4 py-2" />
          </div>
          <div>128K uses · Inspired</div>
        </div>
        <div className="flex-col">
          <img src={voicepic1} alt="voicepic" />
          <div className="flex">
            <div className="text-black">Drake</div>
            <img src={polygon} alt="polygon" className="pl-4 py-2" />
          </div>
          <div>128K uses · Inspired</div>
        </div>
        <div className="flex">
          <div className="flex-col relative z-0 pr-24">
            <img src={voicepic} alt="voicepic" />
            <div className="flex">
              <div className="text-black">Drake</div>
              <img src={polygon} alt="polygon" className="pl-4 py-2" />
            </div>
            <div>128K uses · Inspired</div>
          </div>
          <img
            src={right}
            alt="right"
            className="absolute absolute right-12 z-10 py-12"
          />
        </div>
      </div>
      <div className="flex justify-center w-full pt-6 py-2 gap-2">
        <button class="w-4 h-4 bg-gray-500 text-white font-semibold rounded-full hover:bg-gray-600" />
        <button class="w-4 h-4 bg-gray-500 text-white font-semibold rounded-full hover:bg-gray-600" />
        <button class="w-4 h-4 bg-gray-500 text-white font-semibold rounded-full hover:bg-gray-600" />
      </div>
    </div>
  );
}

export default Trending;
