import React from "react";
import Articles from "./Articles";
import articleContent from "./articlesContent";
import "./ArticleLayout.css";

function ArticleLayout() {
  return (
    <div className="article-container">
      {articleContent.slice(0,4).map((articleBeingChecked) => {
        return (
          <Articles
            src={articleBeingChecked.src}
            alt={articleBeingChecked.alt}
            title={articleBeingChecked.title}
            content={articleBeingChecked.content}
            link={articleBeingChecked.link}
          />
        );
      })}
    </div>
  );
}

export default ArticleLayout;
