import CategoryThumbNail from "../../components/CategoryThumbNail/CategoryThumbNail";
import * as S from "./Home.styles";
import data from "../../api/data.json";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/authentication/context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (!currentUser) {
    return null;
  }

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
