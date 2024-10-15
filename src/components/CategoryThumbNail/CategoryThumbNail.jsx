import React from "react";
import {
  Card,
  Image,
  Overlay,
  StatusContainer,
  CategoryContainer,
} from "./CategoryThumbNail.styles";
import CategoryStatus from "../ui/CategoryStatus/CategoryLabel";

const CategoryThumbNail = ({ imgUrl, onClick, children, status }) => {
  return (
    <CategoryContainer>
      <Card onClick={onClick}>
        <Image src={imgUrl} alt="Category Thumbnail" />
        <Overlay>
          <p>{children}</p>
        </Overlay>
      </Card>
      <StatusContainer>
        <CategoryStatus status={status} />
      </StatusContainer>
    </CategoryContainer>
  );
};

export default CategoryThumbNail;
