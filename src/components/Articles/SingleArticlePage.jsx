import React from "react";
import { useParams } from "react-router-dom";
import articleContent from "./articlesContent.js";
import NavBarSolid from "../Navbar/NavBarSolid.jsx";
import Footer from "../ContactSection/Footer.jsx";
import "./SingleArticlePage.css";

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
      <article class="o-grid">
        <header class="o-grid__area-01 o-header u-txt-center">
          <h1 class="c-heading c-heading--01">{article.title}</h1>
        </header>
        <div class="o-grid__area-02 u-txt-center">
          <h4 class="c-heading c-heading--03">{article.tagline}</h4>
          <h5 class="c-heading c-heading--04"></h5>
        </div>
        <section class="o-grid__area-03 o-profile">
          <div class="o-profile__inner">
            <figure class="o-media">
              <img
                class="o-media__img"
                src={article.src}
                alt="Albertus Seba showing a lizard in a bottle"
              />
            </figure>
            <h5>{article.sideheading}</h5>
            <ol>
              {article.sideContent ? article.sideContent
                .trim()
                .split("\n")
                .map((step, index) => (
                  <li key={index}>{step.trim()}</li>
                )) : null}
            </ol>
          </div>
        </section>
        <div class="o-grid__area-04 o-content">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default SingleArticlePage;
