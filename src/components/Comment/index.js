import React from "react";

import "./styles.css";

export default function Comment({ data }) {
  return (
    <li className="comment-item">
      <img src={data.author.avatar} alt="Use Photo" />
      <div className="comment-body">
        <p className="comment-text">
          <strong className="name">{data.author.name}</strong>
          {data.content}
        </p>
      </div>
    </li>
  );
}
