import React from "react";

export function Image({ url, title, description }) {
  return (
    <div>
      <img src={url} alt="" height={300} width={200} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
