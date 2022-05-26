import React from "react";
import { Logo } from "../../util/AssetUtil";
import "./footer.css";

const FooterListItem = ({ title, items, style }) => {
  return (
    <div className="footer-list-item" style={style}>
      <h5> {title}</h5>
      {items.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-container section__margin">
      <h1>Do you want to step in to the future before others</h1>
      <button>Request Early Access</button>

      <div className="footer-info">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
          <h4>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</h4>
        </div>
        <FooterListItem
          title={"Links"}
          items={["Overons", "Social Media", "Counters", "Contact"]}
          style={{ flex: 1 }}
        />
        <FooterListItem
          title={"Company"}
          items={["Terms & Conditions", "Privacy Policy", "Contact"]}
          style={{ flex: 1 }}
        />
        <FooterListItem
          title={"Get in touch"}
          items={[
            "Crechterwoord K12 182 DK Alknjkcb",
            "085-132567",
            "info@payme.net",
          ]}
          style={{ flex: 1 }}
        />
      </div>
      <h5>© 2021 GPT-3. All rights reserved.</h5>
    </div>
  );
};

export default Footer;
