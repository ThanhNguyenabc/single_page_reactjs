import React from "react";
import "./article.css";

const Article = ({ imagePath, title, date }) => {
  return (
    <div className="article-container">
      <img src={imagePath} alt="" />
      <div className="article-text-container">
        <h6>{date}</h6>
        <h1>{title}</h1>
        <button>Read Full Article</button>
      </div>
    </div>
  );
};

export default Article;
