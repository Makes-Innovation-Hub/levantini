import { FaCrown } from "react-icons/fa";
import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const UserRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 25px;
  margin: 10px 0;
  background-color: ${(props) => (props.isTopThree ? "#fff" : "#f0f0f0")};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Points = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

export const Rank = styled.div`
  display: flex;
  align-items: center;
`;

export const Position = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 5px;
`;

export const Crown = styled(FaCrown)`
  font-size: 1.5rem;
`;

// Sample data for users
export const users = [
  { id: 1, name: "Shalev", points: 25256, profileImage: "path/to/image1", rank: 1 },
  { id: 2, name: "Liad", points: 24586, profileImage: "path/to/image2", rank: 2 },
  { id: 3, name: "Yohav", points: 22957, profileImage: "path/to/image3", rank: 3 },
  { id: 4, name: "Psyonix_*", points: 22541, profileImage: "path/to/image4", rank: 4 },
];
