import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../features/authentication/context/AuthContext";
import CategoryThumbNail from "../../components/CategoryThumbNail/CategoryThumbNail";
import * as S from "./Home.styles";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/Firebase/firebaseSetup";
import Spinner from "../../components/ui/Spinner/Spinner";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const categoriesCollection = collection(
          db,
          "Levnantini-Real-Data-Events-Collection",
        );
        const categorySnapshot = await getDocs(categoriesCollection);
        const categoryList = categorySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(categoryList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

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
