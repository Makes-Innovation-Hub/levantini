import { useFirestoreQuery } from "@react-query-firebase/database";
import CategoryThumbNail from "../../components/CategoryThumbNail/CategoryThumbNail";
import * as S from "./Home.styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/authentication/context/AuthContext";
import { db } from "../../lib/Firebase/firebaseSetup";
import { LEVANTINI_KEY } from "../../lib/react-query/constant";
import { LEVANTINI_COLLECTION } from "../../lib/Firebase/constants";
import Loading from "../../components/ui/Spinner/Spinner.style";
import { collection } from "firebase/firestore";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const categoriesRef = collection(db, LEVANTINI_COLLECTION);

  const categoriesQuery = useFirestoreQuery([LEVANTINI_KEY], categoriesRef);

  if (categoriesQuery.isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (categoriesQuery.isError) return <div>Error fetching categories</div>;

  const categories = categoriesQuery.data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return (
    <>
      <S.CategoryContainer>
        <S.Title>Choose your category of game</S.Title>
        <S.GridContainer>
          {categories.map((category) => (
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
