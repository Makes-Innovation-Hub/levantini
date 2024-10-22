// Home.jsx
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

  const { data: categories, isLoading, isError } = useFetchData();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) return <div>Error fetching categories</div>;

  const handleOnClick = (categoryId, categoryStatus) => {
    if (categoryStatus !== "locked") {
      navigate(`${QUIZ}/${categoryId}`);
    }
  };

  const getCategoryStatus = (categories, id) => {
    let status = "locked";
    const categoryIndex = categories.findIndex((cat) => cat.id === id);

    if (currentUser && currentUser.progress) {
      const progress = currentUser.progress;
      const categoryProgress = progress.find((prog) => prog.id === id);

      if (categoryProgress) {
        // Use the existing status (e.g., "completed", "in_progress")
        status = categoryProgress.status;
      } else {
        // Determine the highest completed category index
        const completedCategories = progress
          .filter((prog) => prog.status === "completed")
          .map((prog) => prog.id);

        const completedIndices = categories
          .map((cat, index) => (completedCategories.includes(cat.id) ? index : -1))
          .filter((index) => index !== -1);

        const highestCompletedIndex =
          completedIndices.length > 0 ? Math.max(...completedIndices) : -1;

        if (categoryIndex === highestCompletedIndex + 1) {
          status = "started";
        }
      }
    } else {
      if (categoryIndex === 0) {
        status = "started";
      }
    }
    return status;
  };

  return (
    <>
      <S.CategoryContainer>
        <S.Title>Choose your category of game</S.Title>
        <S.GridContainer>
          {categories.map((category, index) => {
            const position = index % 2 === 0 ? "left" : "right";

            const categoryStatus = getCategoryStatus(categories, category.id);

            return (
              <S.Container
                key={category.id}
                onClick={() => handleOnClick(category.id, categoryStatus)}
              >
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
