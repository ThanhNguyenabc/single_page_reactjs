import React from "react";
import "./possibility.css";
import { PossibilityImg } from "../../util/AssetUtil";

const Possibility = () => {
  return (
    <div className="possibility-container section__padding">
      <img src={PossibilityImg} alt="" className="" />
      <div className="possibility-right">
        <h4 className="possibility-right-early-text">
          Request Early Access to Get Started
        </h4>
        <h2 className="gradient__text possibility-text">
          The possibilities are beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <h4 className="possibility-right-early-text possibility-right-early-text2">
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  );
};

export default Possibility;
