import CategoryThumbNail from "../../components/CategoryThumbNail/CategoryThumbNail";
import * as S from "./Home.styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/authentication/context/AuthContext.jsx";
import CategoryLabel from "../../components/ui/CategoryStatus/CategoryLabel";
import { QUIZ } from "../../routes/routeConstants.js";

import useFetchData from "../../api/hooks/useFetchData";
import Spinner from "../../components/ui/Spinner/Spinner";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log(currentUser);
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
  const handleOnClick = (categoryId) => {
    navigate(`${QUIZ}/${categoryId}`);
  };
  const getCategoryStatus = (id) => {
    let status;
    const progress = currentUser.progress.find((prog) => {
      return prog.id === Number(id);
    });
    if (!progress) {
      status = "locked";
    } else {
      status == progress.status;
    }
    return status;
  };
  return (
    <>
      <S.CategoryContainer>
        <S.Title>Choose your category of game</S.Title>
        <S.GridContainer>
          {data.map((category, index) => {
            const position = index % 2 === 0 ? "left" : "right";

            const categoryStatus = getCategoryStatus(category.id);

            return (
              <S.Container key={category.id} onClick={() => handleOnClick(category.id)}>
                <CategoryThumbNail imgUrl={category.categoryImage}>
                  <S.Label>{category.category}</S.Label>
                </CategoryThumbNail>
                <CategoryLabel position={position} status={categoryStatus} />
              </S.Container>
            );
          })}
        </S.GridContainer>
      </S.CategoryContainer>
    </>
  );
};

export default Home;
