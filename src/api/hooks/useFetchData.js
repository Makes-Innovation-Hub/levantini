import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/Firebase/firebaseSetup";
import { LEVANTINI_COLLECTION } from "../../lib/Firebase/constants";
import { useQuery } from "@tanstack/react-query";
import { LEVANTINI_KEY } from "../../lib/react-query/constant";

const useFetchData = () => {
  const fetchCategories = async () => {
    const categoriesCollection = collection(db, LEVANTINI_COLLECTION);
    const categorySnapshot = await getDocs(categoriesCollection);
    const categoryList = categorySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return categoryList;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: [LEVANTINI_KEY],
    queryFn: fetchCategories,
  });
  return { data, isLoading, isError };
};

export default useFetchData;
