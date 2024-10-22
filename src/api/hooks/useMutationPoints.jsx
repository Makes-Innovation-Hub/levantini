import { doc, increment, updateDoc } from "firebase/firestore";
import { db } from "../../lib/Firebase/firebaseSetup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LEVANTINI_USERS } from "../../lib/Firebase/constants";

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
