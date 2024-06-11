import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./articlesContent.js";
import NavBarSolid from "../Navbar/NavBarSolid.jsx";
import Footer from "../ContactSection/Footer.jsx";

function SingleArticlePage() {
  const { itemId } = useParams();
  const article = articleContent.find(
    (article) => article.id.toString() === itemId
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <NavBarSolid />
      <div className="container">
        <h1>{article.title}</h1>
        <span>{article.author}</span>
        <p>{article.content}</p>
      </div>
      <Footer />
    </div>
  );
}

export default SingleArticlePage;
