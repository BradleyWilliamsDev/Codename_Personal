import React from "react";
import './ArticlePage.css';
import NavBarSolid from "../Navbar/NavBarSolid";
import Footer from "../ContactSection/Footer";
import articleContent from "./articlesContent";
import ArticlePageItem from "./ArticlePageItem";
import ScrollToTop from "../util/ScrollToTop";

function ArticlesPage() {
  return (
    <div>
        <NavBarSolid />
        <ScrollToTop />
      <header>
        <h1>Articles</h1>
      </header>
      {/* Every item can be 1 component that gets mapped and the data is stored somewhere else for now it can be stored in a js file eg. ArticleData.js
            import it in and then map the array to the components it will be a lot cleaner and more readable    
      */}
      <div className="band">
        {articleContent.map((articleToCheck) => {
            return(
                <ArticlePageItem 
                    itemId = {articleToCheck.id }
                    item_name = {articleToCheck.itemId}
                    link = {articleToCheck.link}
                    image = {articleToCheck.src}
                    title = {articleToCheck.title}
                    content = {articleToCheck.content}
                    author = {articleToCheck.author}
                />
            )
        })}
      </div>
      <Footer />
    </div>
  );
}

export default ArticlesPage;
