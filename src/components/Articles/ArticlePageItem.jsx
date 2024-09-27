import React from "react";
import { Link } from 'react-router-dom';

function ArticlePageItem(props) {
  return (
    <div className={props.item_name}>
      <Link to={`/articles/${props.itemId.toString()}`} params={{ itemId: props.itemId }} className="card">
        <div className="thumb">
          <img src={props.image} alt="" />
        </div>
        <article>
          <h1>{props.title}</h1>
          {props.content ? <p>{props.content.substring(0,150) + "..."}</p> : null}
          <span>{props.author}</span>
        </article>
      </Link>
    </div>
  );
}

export default ArticlePageItem;
