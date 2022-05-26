import React from "react";
import { IntroText } from "../../containers/whatGPT3/WhatGPT3";
import "./feature.css";
const featureItemStyle = { fontSize: 18, marginBottom: 24, width: 250 };
const Feature = () => {
  return (
    <div className="feature-container section__padding">
      <div className="feature-intro">
        <h2>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <h6>Request Early Access to Get Started</h6>
      </div>
      <div>
        <div className="feature-des-item">
          <IntroText
            text={"Improving end distrusts instantly"}
            style={featureItemStyle}
          />
          <h3>
            From they fine john he give of rich he. They age and draw mrs like.
            Improving end distrusts may instantly was household applauded.
          </h3>
        </div>
        <div className="feature-des-item">
          <IntroText
            text={"Become the tended active "}
            style={featureItemStyle}
          />
          <h3>
            Considered sympathize ten uncommonly occasional assistance
            sufficient not. Letter of on become he tended active enable to.
          </h3>
        </div>
        <div className="feature-des-item">
          <IntroText text={"Message or am nothing"} style={featureItemStyle} />
          <h3>
            Led ask possible mistress relation elegance eat likewise debating.
            By message or am nothing amongst chiefly address.
          </h3>
        </div>
        <div className="feature-des-item">
          <IntroText text={"Really boy law county"} style={featureItemStyle} />
          <h3>
            Really boy law county she unable her sister. Feet you off its like
            like six. Among sex are leave law built now. In built table in an
            rapid blush.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Feature;
