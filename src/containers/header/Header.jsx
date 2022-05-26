import React from "react";
import "./header.css";
import { AIImg, People } from "../../util/AssetUtil";
const Header = () => {
  return (
    <div className="header-container section__padding">
      <div className="header-left">
        <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="header-button">
          <input type="text" placeholder="Your email address" />
          <button>Get Started</button>
        </div>
        <div className="header-left-users">
          <img src={People} alt="" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <img src={AIImg} alt="" className="header-right-image" />
    </div>
  );
};

export default Header;
