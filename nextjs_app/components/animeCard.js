import React from "react";

export default function AnimeCard({ title, image }) {
  return (
    <div>
      <p>from anime Card</p>
      <h2>{title}</h2>
      <img src={image}></img>
    </div>
  );
}
