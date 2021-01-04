import React from "react";
import MenuCliente from "./Menu/MenuCliente";
const Content = ({ styles }) => {
  const dummyPost = {
    title: `CREO QUE HAY QUE QUITAR ESTE DESMADRE`,
    summary:
      "ESTE TAMBIEN"
  };

  const posts = Array(1).fill();

  const contentStyle = {
    paddingTop: 0,
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
          </div>
          <MenuCliente></MenuCliente>
          </>
        );
      })}
    </div>
  );
};

export default Content;