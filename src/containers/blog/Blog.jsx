import React from "react";
import Article from "../../components/article/Article";
import { Blog1Img, Blog2Img, Blog3Img, Blog4Img, Blog5Img } from "../../util/AssetUtil";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog-container section__margin">
      <h3 className="blog-container-heading">
        A lot is happening, We are blogging about it.
      </h3>

      <div className="blog-list-article">
        <div className="blog-grid-item-1">
          <Article
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            imagePath={Blog1Img}
            date={"Sep 26, 2021"}
          />
        </div>
        <Article
          title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          imagePath={Blog2Img}
          date={"Sep 26, 2021"}
        />
        <Article
          title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          imagePath={Blog3Img}
          date={"Sep 26, 2021"}
        />
        <Article
          title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          imagePath={Blog4Img}
          date={"Sep 26, 2021"}
        />
        <Article
          title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
          imagePath={Blog5Img}
          date={"Sep 26, 2021"}
        />
      </div>
    </div>
  );
};

export default Blog;
