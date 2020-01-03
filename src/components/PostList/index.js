import React, { Component } from "react";

import "./styles.css";

import Post from "../Post";

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=51"
        },
        date: "04 Jan 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            content:
              "Multa sunt dicta ab antiquis de contemnendis ac despiciendis rebus humanis; Duo Reges: constructio interrete. Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium? Quis istum dolorem timet? Si mala non sunt, iacet omnis ratio Peripateticorum. Hoc non est positum in nostra actione."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Júlio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=51"
        },
        date: "02 Jan 2020",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://i.pravatar.cc/150?img=5"
            },
            content:
              "Quis istum dolorem timet? Si mala non sunt, iacet omnis ratio Peripateticorum. Hoc non est positum in nostra actione."
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://i.pravatar.cc/150?img=11"
            },
            content:
              "Tu autem inter haec tantam multitudinem hominum interiectam non vides nec laetantium nec dolentium?"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <section id="main-section">
        <ul className="posts">
          {this.state.posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ul>
      </section>
    );
  }
}
