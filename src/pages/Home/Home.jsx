import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/authentication/context/AuthContext";
import CategoryThumbNail from "../../components/CategoryThumbNail/CategoryThumbNail";
import * as S from "./Home.styles";
import useFetchData from "../../api/hooks/usefetchData";
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
  );
};

export default Home;
