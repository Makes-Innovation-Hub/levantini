import React from "react";
import { Card, Image, Overlay } from "./CategoryThumbNail.styles";

const CategoryThumbNail = ({ imgUrl, onClick, children }) => {
  return (
    <Card onClick={onClick}>
      <Image src={imgUrl} alt="Category Thumbnail" />
      <Overlay>
        <p>{children}</p>
      </Overlay>
    </Card>
  );
};

export default CategoryThumbNail;
