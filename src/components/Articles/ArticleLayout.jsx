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
            id={articleBeingChecked.id}
            src={articleBeingChecked.src}
            alt={articleBeingChecked.alt}
            title={articleBeingChecked.title}
            content={articleBeingChecked.content}
          />
        );
      })}
    </div>
  );
}

export default ArticleLayout;
