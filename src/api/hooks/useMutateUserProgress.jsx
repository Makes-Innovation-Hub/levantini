// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../lib/Firebase/firebaseSetup";
// import { LEVANTINI_USERS } from "../../lib/Firebase/constants";
// import { useQuery } from "@tanstack/react-query";
// import { LEVANTINI_KEY } from "../../lib/react-query/constant";

// const MutateUserProgress = () => {
//   const fetchCategories = async () => {
//     const categoriesCollection = collection(db, LEVANTINI_USERS);
//     const categorySnapshot = await getDocs(categoriesCollection);
//     const categoryList = categorySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     return categoryList;
//   };

//   // const { data, isLoading, isError } = useQuery({
//   //   queryKey: [LEVANTINI_KEY],
//   //   queryFn: fetchCategories,
//   // });

//   // return { data, isLoading, isError };
// };

// export default MutateUserProgress;

import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../lib/Firebase/firebaseSetup";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const LEVANTINI_USERS = "users";

export const updateUserProgress = async ({ currentUser, id, status }) => {
  console.log({ currentUser, id, status });
  // Get the user document reference
  console.log("updateuserprogress");

  if (!currentUser) {
    console.error("User is not authenticated.");
    return;
  }
  const userId = currentUser.id;
  console.log({ userId });
  const userDocRef = doc(db, LEVANTINI_USERS, userId);

  // Update the progress array inside the user document
  if (status === "in_progress") {
    await updateDoc(userDocRef, {
      progress: arrayUnion({ id, status }),
    });
  } else if (status === "completed") {
    await updateDoc(
      userDocRef,
      {
        "progress.$[elem].status": "completed",
      },
      { arrayFilters: [{ "elem.id": id }] },
    );
    console.log("Progress status updated to 'completed'");
  }
};

export const useMutateUserProgress = () => {
  const queryClient = useQueryClient();

  const { mutate, isError, isLoading } = useMutation({
    mutationFn: (obj) => updateUserProgress(obj),
    // onMutate: async (newProgress) => {
    //   // Cancel any outgoing refetches (so they don't overwrite optimistic update)
    //   await queryClient.cancelQueries([LEVANTINI_USERS]);

    //   // Snapshot the previous value
    //   const previousUserData = queryClient.getQueryData([
    //     LEVANTINI_USERS,
    //     newProgress.userId,
    //   ]);

    //   // Optimistically update the cache with new progress data
    //   queryClient.setQueryData([LEVANTINI_USERS, newProgress.userId], (oldData) => ({
    //     ...oldData,
    //     progress: [...oldData.progress, newProgress],
    //   }));

    //   // Return the snapshot so that it can be used in case of an error
    //   return { previousUserData };
    // },
    // onError: (err, newProgress, context) => {
    //   // Roll back to the previous user data if the mutation fails
    //   queryClient.setQueryData(
    //     [LEVANTINI_USERS, newProgress.userId],
    //     context.previousUserData,
    //   );
    // },
    onSuccess: (newProgress) => {
      // Invalidate the cache and refetch the user data
      queryClient.invalidateQueries([LEVANTINI_USERS, newProgress.userId]);
    },
  });
  return { mutate, isLoading, isError };
};
