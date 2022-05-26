import React from "react";
import {
  AtlassianImg,
  DropBoxImg,
  GoogleImg,
  ShopifyImg,
  Slack,
} from "../../util/AssetUtil";
import "./brand.css";

const Brand = () => {
  return (
    <div className="brand-container section__padding">
      <img src={GoogleImg} alt="google" />
      <img src={Slack} alt="slack" />
      <img src={AtlassianImg} alt="atlassian" />
      <img src={DropBoxImg} alt="dropbox" />
      <img src={ShopifyImg} alt="shopify" />
    </div>
  );
};

export default Brand;
