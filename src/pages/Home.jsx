import { setExample } from "../redux/slices/example.slice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/apiConstants";
import CategoryThumbNail from "../../src/components/CategoryThumbNail/CategoryThumbNail";

const Home = () => {
  const dispatch = useDispatch();
  const example = useSelector((state) => state.example.example);

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // eslint-disable-next-line no-console
  console.log(example);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts</div>;

  const handleCategoryClick = () => {
    console.log("Category thumbnail clicked!");
    // Perform some actions
  };

  return (
    <div>
      {/* Your content from the fetched data */}
      {data &&
        data.map((post) => (
          <div key={post.id}>
            {/* <h2>{post.title}</h2> */}
            {/* <p>{post.body}</p> */}
          </div>
        ))}

      {/* Render the CategoryThumbNail */}
      <CategoryThumbNail
        imgUrl="https://cdn.pixabay.com/photo/2014/10/14/20/24/football-488714_1280.jpg"
        onClick={handleCategoryClick}
      >
        Sport
      </CategoryThumbNail>
    </div>
  );
};

export default Home;
