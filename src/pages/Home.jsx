import { setExample } from "../redux/slices/example.slice";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/apiConstants";
import styled from "styled-components";
import CategoryThumbNail from "../components/CategoryThumbNail/CategoryThumbNail";

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

  const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  `;

  const Title = styled.h2`
    font-family: var(--font-rubik-bold);
    font-style: italic;
    font-size: 14px;
    margin-bottom: 30px;
    text-align: center;
  `;

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    justify-items: center;
  `;

  const Label = styled.span`
    font-family: var(--font-abeezee-regular);
    font-size: 16px;
    font-weight: 400;
  `;

  const categories = [
    {
      id: 0,
      label: "Music",
      imgUrl: "https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg",
    },
    {
      id: 1,
      label: "Holidays",
      imgUrl:
        "https://images.news18.com/webstories/2024/03/pexels-leeloo-the-first-6487203-2024-03-45799de92804bf12f25192433341b637-scaled.jpg",
    },
    {
      id: 2,
      label: "Culture",
      imgUrl:
        "https://images.pexels.com/photos/1033202/pexels-photo-1033202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      label: "Clothing",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/12/Arabic-traditional-Dress.jpg",
    },
    {
      id: 4,
      label: "Literature",
      imgUrl:
        "https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
    },
    {
      id: 5,
      label: "Cinema",
      imgUrl:
        "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      label: "Science",
      imgUrl:
        "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      label: "Food",
      imgUrl:
        "https://images.pexels.com/photos/6544491/pexels-photo-6544491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <CategoryContainer>
        <Title>Choose your category of game</Title>
        <GridContainer>
          {categories.map((category) => (
            <CategoryThumbNail key={category.id} imgUrl={category.imgUrl}>
              <Label>{category.label}</Label>
            </CategoryThumbNail>
          ))}
        </GridContainer>
      </CategoryContainer>
    </>
  );
};

export default Home;
