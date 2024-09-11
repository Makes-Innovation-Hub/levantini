import React from "react";
import styled from "styled-components";
import CategoryThumbNail from "../components/CategoryThumbNail/CategoryThumbNail";

// Container to hold the entire category layout
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  font-family: var(--font-abeezee-italic);
  font-style: italic;
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
`;

const categories = [
  {
    label: "Sport",
    imgUrl: "https://cdn.pixabay.com/photo/2014/10/14/20/24/football-488714_1280.jpg",
  },
  {
    label: "Music",
    imgUrl: "https://cdn.pixabay.com/photo/2023/05/22/18/11/guitar-8011240_1280.jpg",
  },
  {
    label: "Holidays",
    imgUrl: "https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_960_720.jpg",
  },
  {
    label: "Food",
    imgUrl: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg",
  },
  {
    label: "Clothes",
    imgUrl: "https://cdn.pixabay.com/photo/2015/01/21/17/22/shopping-606993_1280.jpg",
  },
  {
    label: "Cinema",
    imgUrl: "https://cdn.pixabay.com/photo/2017/07/13/23/11/cinema-2502213_1280.jpg",
  },
  {
    label: "Literature",
    imgUrl: "https://cdn.pixabay.com/photo/2024/02/24/20/54/books-8594725_1280.jpg",
  },
  {
    label: "Inventions",
    imgUrl: "https://cdn.pixabay.com/photo/2018/01/06/22/42/lamp-3066096_1280.jpg",
  },
];

const CategoryPage = () => {
  return (
    <CategoryContainer>
      <Title>Choose your category of game</Title>
      <GridContainer>
        {categories.map((category) => (
          <CategoryThumbNail key={category.label} imgUrl={category.imgUrl}>
            {category.label}
          </CategoryThumbNail>
        ))}
      </GridContainer>
    </CategoryContainer>
  );
};

export default CategoryPage;
