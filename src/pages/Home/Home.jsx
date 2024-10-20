<<<<<<< HEAD
import CategoryThumbNail from "../../components/CategoryThumbNail/CategoryThumbNail";
import * as S from "./Home.styles";
import data from "../../api/data.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/authentication/context/AuthContext";
import CategoryLabel from "../../components/ui/CategoryStatus/CategoryLabel";
import ToolTip from "../../components/ui/ToolTip/ToolTip";
import CatgoeryToolTip from "../../components/ui/ToolTip/CatgoeryToolTip";
=======
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/authentication/context/AuthContext";
import CategoryThumbNail from "../../components/CategoryThumbNail/CategoryThumbNail";
import * as S from "./Home.styles";
import useFetchData from "../../api/hooks/usefetchData";
import Spinner from "../../components/ui/Spinner/Spinner";
>>>>>>> 3f42e5b6f29f0903b713a2f602fed8ec897ffc8c

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { data, isLoading, isError } = useFetchData();
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) return <div>Error fetching posts</div>;

  return (
<<<<<<< HEAD
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
=======
    <S.CategoryContainer>
      <S.Title>Choose your category of game</S.Title>
      <S.GridContainer>
        {data.map((category) => (
          <CategoryThumbNail key={category.id} imgUrl={category.categoryImage}>
            <S.Label>{category.category}</S.Label>
          </CategoryThumbNail>
        ))}
      </S.GridContainer>
    </S.CategoryContainer>
>>>>>>> 3f42e5b6f29f0903b713a2f602fed8ec897ffc8c
  );
};

export default Home;
