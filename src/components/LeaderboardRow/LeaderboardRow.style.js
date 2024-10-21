import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  margin-bottom: 12px;
  border: 3px solid #47434d;
`;

export const RankContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.$isTopThree ? "#47434d" : "#47434d")};
  color: white;
  position: relative;
  font-size: 25px;
  margin: -1px 10px -1px -1px;
  border: 5px solid #47434d;
  flex-direction: column;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 19px;
`;

export const Points = styled.span`
  font-weight: 700;
  font-size: 22px;
  color: black;
  margin-right: 10px;
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  border: 2px solid #ddd;
  margin-left: 20px;
`;
