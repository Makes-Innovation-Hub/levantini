// import { useMutation } from "@tanstack/react-query";
// import { LEVANTINI_USERS } from "../../lib/Firebase/constants";
// import { db } from "../../lib/Firebase/firebaseSetup";
// import { doc, increment, updateDoc } from "firebase/firestore";
// import { useAuth } from "../../features/authentication/context/AuthContext";

import { doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../lib/Firebase/firebaseSetup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LEVANTINI_USERS } from "../../lib/Firebase/constants";

// const useMutationPoints = () => {
//   // const { user } = useAuth();
//   // const updateUserPoints = async (points) => {
//   //   if (!user) throw new Error("User is not authenticated");
//   //   const userRef = doc(db, LEVANTINI_USERS, user.uid);
//   //   await updateDoc(userRef, {
//   //     points: increment(points),
//   //   });
//   // };
//   // const mutation = useMutation({
//   //   mutationFn: updateUserPoints,
//   //   onSuccess: () => {
//   //     console.log("Points updated successfully");
//   //   },
//   //   onError: (error) => {
//   //     console.error("Error updating points:", error);
//   //   },
//   // });
//   // return mutation;
// };

// export default useMutationPoints;

/*
pseudo code:
This is the first 
1. create a function that will update the current user points. With the user we logged in
a) hard coded points at first
b) we get the user id from authcontext
currentPoints + newPoints
Find a way in firebase to increment the points field use the incrmeent method
2. Implement react query mutation with the function
---------
quizContext
3. Then call the mutation in the quizContext. In get click handler. 
a) useMutationPoints(10s,5)
*/

const updateUserPoints = async ({ userId, points }) => {
  const userDocRef = doc(db, LEVANTINI_USERS, userId);
  await updateDoc(userDocRef, {
    points: increment(points),
  });
};

export const useMutatePoints = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, points }) => updateUserPoints({ userId, points }),
    onMutate: async ({ userId, points }) => {
      await queryClient.cancelQueries([LEVANTINI_USERS, userId]);

      const previousUserData = queryClient.getQueryData([LEVANTINI_USERS, userId]);

      queryClient.setQueryData([LEVANTINI_USERS, userId], (oldData) => ({
        ...oldData,
        points: oldData.points + points,
      }));

      return { previousUserData };
    },
    onError: (err, newPoints, context) => {
      queryClient.setQueryData(
        [LEVANTINI_USERS, context.userId],
        context.previousUserData,
      );
    },
    onSuccess: (data, { userId }) => {
      queryClient.invalidateQueries([LEVANTINI_USERS, userId]);
    },
  });
};
