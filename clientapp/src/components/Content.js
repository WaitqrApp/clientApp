import React from "react";
import MenuCliente from "./Menu/MenuCliente";
const Content = ({ styles }) => {
  const dummyPost = {
    title: `Bienvenido a La Noria`,
    summary:
      "Ordenar"
  };

  const posts = Array(1).fill(dummyPost);

  const contentStyle = {
    paddingTop: styles.topBarHeight + 20,
    paddingRight: 20,
    paddingBottom: styles.footerMenuHeight + 20,
    paddingLeft: 20
  };

  return (
    <div style={contentStyle}>
      {posts.map((post, i) => {
        return (
            <>
          <div key={i} style={{ marginBottom: 40 }}>
            <h2 style={{ marginBottom: 0 }}>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
          <MenuCliente></MenuCliente>
          </>
        );
      })}
    </div>
  );
};

export default Content;