import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../../lib/Firebase/firebaseSetup";
import { LEVANTINI_USERS } from "../../../lib/Firebase/constants";
import * as S from "./ScoreDisplay.styles";
import { useDispatch, useSelector } from "react-redux";
import { setPoints } from "../../../redux/slices/app.slice";

const fetchUserPoints = async (userId) => {
  const userDocRef = doc(db, LEVANTINI_USERS, userId);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    return userDoc.data().points || 0;
  } else {
    console.error("User document does not exist");
    return 0;
  }
};

export default function ScoreDisplay() {
  const user = auth.currentUser;
  const dispatch = useDispatch();
  const points = useSelector((state) => state.app.points);

  const { data: totalPoints } = useQuery({
    queryKey: [LEVANTINI_USERS, user?.uid],
    queryFn: () => fetchUserPoints(user.uid),
    enabled: !!user,
  });

  useEffect(() => {
    if (user) {
      const userDocRef = doc(db, LEVANTINI_USERS, user.uid);

      const unsubscribe = onSnapshot(userDocRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          const updatedPoints = userData.points || 0;

          dispatch(setPoints(updatedPoints));
        } else {
          console.error("User document does not exist");
        }
      });

      return () => unsubscribe();
    }
  }, [user, dispatch]);

  const displayPoints = typeof points === "number" ? points : totalPoints || 0;

  return (
    <S.LogoContainer>
      <S.LogoSvgContainer>
        <svg
          width="25"
          height="25"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.04394 9C4.04394 5.89219 6.56113 3.375 9.66894 3.375C12.7768 3.375 15.2939 5.89219 15.2939 9C15.2939 12.1078 12.7768 14.625 9.66894 14.625C6.56113 14.625 4.04394 12.1078 4.04394 9ZM18.6689 9C18.6689 13.9711 14.64 18 9.66894 18C4.69785 18 0.668945 13.9711 0.668945 9C0.668945 4.02891 4.69785 0 9.66894 0C14.64 0 18.6689 4.02891 18.6689 9ZM9.66894 15.75C13.3955 15.75 16.4189 12.7266 16.4189 9C16.4189 5.2418 13.3955 2.25 9.66894 2.25C5.91074 2.25 2.91895 5.2418 2.91895 9C2.91895 12.7266 5.91074 15.75 9.66894 15.75Z"
            fill="#BFBFBF"
          />
        </svg>
        <S.LogoText>L</S.LogoText>
      </S.LogoSvgContainer>
      <S.CounterContainer>
        <h1>{displayPoints}</h1>
      </S.CounterContainer>
    </S.LogoContainer>
  );
}
