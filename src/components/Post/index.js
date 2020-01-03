import React from "react";

import "./styles.css";
import Comment from "../Comment";

export default function Post({ data }) {
  return (
    <li className="post-item">
      <div className="user-infos">
        <img src={data.author.avatar} alt="User Photo" />
        <div className="post-infos">
          <strong>{data.author.name}</strong>
          <span>{data.date}</span>
        </div>
      </div>
      <p className="post-text">{data.content}</p>
      <div className="line"></div>
      <ul className="comments">
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </li>
  );
}
