import React from "react";
import rect1 from "../assets/LP images/Rectangle 26 (1).png";
import rect2 from "../assets/LP images/Rectangle 26 (3).png";
import rect3 from "../assets/LP images/Rectangle 26 (4).png";
import polygon from "../assets/LP images/Polygon 4 (1).png";
import polygon1 from "../assets/LP images/Polygon 5.png";
import custom from "../assets/LP images/custom-ai-voicea 1.png";
import payment from "../assets/LP images/Screenshot 2023-09-12 at 10.27 1.png";
import footer from "../assets/LP images/footer.png";

function Track() {
  return (
    <>
      <div className="text-black text-2xl pl-24 pt-12">Popular Tracks</div>
      <div className="pt-4 pl-24">
        Songs that used Lalals to transform vocals
      </div>
      <div className="flex-col">
        <div className="flex pl-24">
          <div className="w-1/2 flex justify-between pt-12">
            <div className="flex">
              <img
                src={polygon}
                alt="polygon"
                className="z-10 absolute pl-5 pt-5"
              />
              <img src={rect1} alt="rect1" className="z-0" />
              <div className="pt-2 pl-2">
                <div className="text-black">Level Up</div>
                <div className="text-sm">Joshua M.Drake AI</div>
              </div>
            </div>
            <div className="flex pr-8">
              <img src={polygon1} alt="polygon1" className="py-6" />
              <div className="text-sm py-6 pl-2">1.3M</div>
            </div>
          </div>
          <div className="w-1/2 flex justify-between pt-12">
            <div className="flex">
              <img
                src={polygon}
                alt="polygon"
                className="z-10 absolute pl-5 pt-5"
              />
              <img src={rect2} alt="rect1" className="z-0" />
              <div className="pt-2 pl-2">
                <div className="text-black">Trap</div>
                <div className="text-sm">Lucas.Camilla AI</div>
              </div>
            </div>
            <div className="flex pr-8">
              <img src={polygon1} alt="polygon1" className="py-6" />
              <div className="text-sm py-6 pl-2">1.3M</div>
            </div>
          </div>
        </div>
        <div className="flex pl-24">
          <div className="w-1/2 flex justify-between pt-12">
            <div className="flex">
              <img
                src={polygon}
                alt="polygon"
                className="z-10 absolute pl-5 pt-5"
              />
              <img src={rect1} alt="rect1" className="z-0" />
              <div className="pt-2 pl-2">
                <div className="text-black">Level Up</div>
                <div className="text-sm">Joshua M.Drake AI</div>
              </div>
            </div>
            <div className="flex pr-8">
              <img src={polygon1} alt="polygon1" className="py-6" />
              <div className="text-sm py-6 pl-2">1.3M</div>
            </div>
          </div>
          <div className="w-1/2 flex justify-between pt-12">
            <div className="flex">
              <img
                src={polygon}
                alt="polygon"
                className="z-10 absolute pl-5 pt-5"
              />
              <img src={rect3} alt="rect1" className="z-0" />
              <div className="pt-2 pl-2">
                <div className="text-black">Trap</div>
                <div className="text-sm">Lucas.Camilla AI</div>
              </div>
            </div>
            <div className="flex pr-8">
              <img src={polygon1} alt="polygon1" className="py-6" />
              <div className="text-sm py-6 pl-2">1.3M</div>
            </div>
          </div>
        </div>
        <div className="flex pl-24">
          <div className="w-1/2 flex justify-between pt-12">
            <div className="flex">
              <img
                src={polygon}
                alt="polygon"
                className="z-10 absolute pl-5 pt-5"
              />
              <img src={rect2} alt="rect1" className="z-0" />
              <div className="pt-2 pl-2">
                <div className="text-black">Level Up</div>
                <div className="text-sm">Joshua M.Drake AI</div>
              </div>
            </div>
            <div className="flex pr-8">
              <img src={polygon1} alt="polygon1" className="py-6" />
              <div className="text-sm py-6 pl-2">1.3M</div>
            </div>
          </div>
          <div className="w-1/2 flex justify-between pt-12">
            <div className="flex">
              <img
                src={polygon}
                alt="polygon"
                className="z-10 absolute pl-5 pt-5"
              />
              <img src={rect3} alt="rect1" className="z-0" />
              <div className="pt-2 pl-2">
                <div className="text-black">Trap</div>
                <div className="text-sm">Lucas.Camilla AI</div>
              </div>
            </div>
            <div className="flex pr-8">
              <img src={polygon1} alt="polygon1" className="py-6" />
              <div className="text-sm py-6 pl-2">1.3M</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-black text-2xl pt-36">How It Works</div>
      </div>
      <div className="flex justify-center">
        <div className="text-xl pt-8">
          Simply select a voice, upload or record an audio file
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-xl pt-4">
          Within just a few seconds you can preview and download your new audio.
        </div>
      </div>
      <div className="flex justify-center">
        <div className="text-base pt-16">Input audio</div>
        <img src={polygon1} alt="polygon1" className="pl-12 pt-16 py-12" />
        <img src={custom} alt="custom" className="pl-12 pt-4" />
        <img src={polygon1} alt="polygon1" className="pl-12 pt-16 py-12" />
        <div className="text-base pl-12 pt-16">Output audio</div>
      </div>
      <div className="flex justify-center pt-24">
        <img src={payment} alt="payment" />
      </div>
      <div className="flex justify-center">
        <div className="text-xl text-black pt-12">Testimonials</div>
      </div>
      <div className="flex justify-center pt-24">
        <img src={footer} alt="footer" className="px-2" />
      </div>
      <footer className="footer p-10 bg-footer text-footer">
        <div className="flex-col">
          <div className="pl-24 text-footletter">lalals footer</div>
          <div className="pl-24">
            <div className="h-2 w-8 bg-footletter"></div>
          </div>
          <div className="pl-24">
            <div className="h-1 w-12 bg-footletter"></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Track;
