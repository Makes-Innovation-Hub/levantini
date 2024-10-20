import CategoryThumbNail from "../../components/CategoryThumbNail/CategoryThumbNail";
import * as S from "./Home.styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/authentication/context/AuthContext";
import CategoryLabel from "../../components/ui/CategoryStatus/CategoryLabel";

import useFetchData from "../../api/hooks/useFetchData";
import Spinner from "../../components/ui/Spinner/Spinner";

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
    <>
      <S.CategoryContainer>
        <S.Title>Choose your category of game</S.Title>
        <S.GridContainer>
          {data.map((category, index) => {
            const position = index % 2 === 0 ? "left" : "right";

            return (
              <S.Container key={category.id}>
                <CategoryThumbNail imgUrl={category.categoryImage}>
                  <S.Label>{category.category}</S.Label>
                </CategoryThumbNail>
                <CategoryLabel position={position} status="locked" />
              </S.Container>
            );
          })}
        </S.GridContainer>
      </S.CategoryContainer>
    </>
  );
};

export default Home;
