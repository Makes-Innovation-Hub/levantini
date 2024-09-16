import CategoryThumbNail from "../../components/CategoryThumbNail/CategoryThumbNail";
import data from "../../api/data.json";
import * as S from "./Home.styles";

const Home = () => {
  return (
    <>
      <S.CategoryContainer>
        <S.Title>Choose your category of game</S.Title>
        <S.GridContainer>
          {data.data.map((category) => (
            <CategoryThumbNail key={category.id} imgUrl={category.categoryImage}>
              <S.Label>{category.category}</S.Label>
            </CategoryThumbNail>
          ))}
        </S.GridContainer>
      </S.CategoryContainer>
    </>
  );
};

export default Home;
