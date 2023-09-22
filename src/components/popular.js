import React from "react";
import popupic1 from "../assets/LP images/Rectangle 9 (3).png";
import popupic2 from "../assets/LP images/Rectangle 9 (5).png";

function Popular() {
  return (
    <div className="flex-col pt-12 pl-24 pb-12">
      <div className="flex pr-24 justify-between">
        <div className="flex">Popular Categories</div>
        <div className="flex">See all</div>
      </div>
      <div className="flex pt-12 pr-24 justify-between">
        <div className="flex-col">
          <img src={popupic1} alt="popupic" />
        </div>
        <div className="flex-col">
          <img src={popupic2} alt="popupic" />
        </div>
        <div className="flex-col">
          <img src={popupic1} alt="popupic" />
        </div>
        <div className="flex-col">
          <img src={popupic2} alt="popupic" />
        </div>
        <div className="flex-col">
          <img src={popupic1} alt="popupic" />
        </div>
        <div className="flex-col">
          <img src={popupic2} alt="popupic" />
        </div>
        <div className="flex-col">
          <img src={popupic1} alt="popupic" />
        </div>
      </div>
    </div>
  );
}

export default Popular;
