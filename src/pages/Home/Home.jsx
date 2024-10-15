import CategoryThumbNail from "../../components/CategoryThumbNail/CategoryThumbNail";
import * as S from "./Home.styles";
import data from "../../api/data.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/authentication/context/AuthContext";
import CategoryLabel from "../../components/ui/CategoryStatus/CategoryLabel";
import ToolTip from "../../components/ui/ToolTip/ToolTip";
import CatgoeryToolTip from "../../components/ui/ToolTip/CatgoeryToolTip";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <>
      <S.CategoryContainer>
        <S.Title>Choose your category of game</S.Title>
        <S.GridContainer>
          {data.data.map((category) => {
            console.log(category);
            return (
              <S.Container key={category.id}>
                <CategoryThumbNail imgUrl={category.categoryImage}>
                  <S.Label>{category.category}</S.Label>
                </CategoryThumbNail>
                <CategoryLabel status="locked" />
              </S.Container>
            );
          })}
        </S.GridContainer>
      </S.CategoryContainer>
    </>
  );
};

export default Home;
