import React from "react";
import ImageWithDesc from "./imageWithDesc";

export default function Chars({ char_list }) {
  return (
    <div>
      {char_list.map((value) => (
        <ImageWithDesc
          key={value["name"]}
          description={value["name"]}
          imagePath={value["image_url"]}
        ></ImageWithDesc>
      ))}
    </div>
  );
}
