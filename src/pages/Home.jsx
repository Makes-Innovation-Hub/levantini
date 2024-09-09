import { setExample } from "../redux/slices/example.slice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import Button from "@/components/ui/Button";
import { fetchPosts } from "../api/apiConstants";
import Categories from "../features/authentication/components/LoginForm/Categories/Categories";
const Home = () => {
  const dispatch = useDispatch();
  const example = useSelector((state) => state.example.example);

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  // eslint-disable-next-line no-console
  console.log("Fetched Data:", data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  return (
    <>
      <Categories />
    </>
  );
};
export default Home;
