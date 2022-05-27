import React from "react";
import "./whatGPT3.css";

export const IntroText = ({ text, style }) => (
  <div className={`title-container`}>
    <div className="title-container-line" />
    <h4 style={style}>{text}</h4>
  </div>
);

const WhatGPT3 = () => {
  return (
    <div className="whatGPT3-container section__margin">
      <div className="whatGPT3-header">
        <div className="whatGPT3-title">
          <IntroText text={"What is GPT-3"} />
        </div>
        <p className="whatGPT3-description">
          We so opinion friends me message as delight. Whole front do of plate
          heard oh ought. His defective nor convinced residence own. Connection
          has put impossible own apartments boisterous. At jointure ladyship an
          insisted so humanity he. Friendly bachelor entrance to on by.
        </p>
      </div>

      <div className="whatGPT3-body-container">
        <h2>The possibilities are beyond your imagination</h2>
        <h6>Explore The Library</h6>
      </div>

      <div className="whatGPT3-footer-container">
        <div className="whatGPT3-footer-item">
          <IntroText text={"Chatbots"} />
          <p>
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought.
          </p>
        </div>
        <div className="whatGPT3-footer-item">
          <IntroText text={"Knowledgebase"} />
          <p>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
        <div className="whatGPT3-footer-item">
          <IntroText text={"Education"} />
          <p>
            At jointure ladyship an insisted so humanity he. Friendly bachelor
            entrance to on by. As put impossible own apartments b
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
