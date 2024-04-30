import React from 'react'
import Articles from './Articles'
import './ArticleLayout.css'

function ArticleLayout() {
  return (
    <div className="article-container">
        <Articles 
          src="https://picsum.photos/300/200"
          alt="this is an articles content"
          title="Article Title"
          content="This is where the content of the article will go."
          link="article1"
        />
        <Articles 
          src="https://picsum.photos/300/200"
          alt="this is an articles content"
          title="Article Title"
          content="This is where the content of the article will go."
          link="article1"
        />
        <Articles 
          src="https://picsum.photos/300/200"
          alt="this is an articles content"
          title="Article Title"
          content="This is where the content of the article will go."
          link="article1"
        />
        <Articles 
          src="https://picsum.photos/300/200"
          alt="this is an articles content"
          title="Article Title"
          content="This is where the content of the article will go."
          link="article1"
        />
    </div>
  )
}

export default ArticleLayout