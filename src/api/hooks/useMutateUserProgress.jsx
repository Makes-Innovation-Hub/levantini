import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/Firebase/firebaseSetup";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const LEVANTINI_USERS = "users";

export const updateUserProgress = async ({ currentUser, id, status }) => {
  console.log("IM IN MUTATION");
  if (!currentUser) {
    console.error("User is not authenticated.");
    return;
  }

  const userId = currentUser.id;
  const userDocRef = doc(db, LEVANTINI_USERS, userId);

  // Step 1: Fetch the user document to get the progress array
  const userDoc = await getDoc(userDocRef);
  if (!userDoc.exists()) {
    console.error("User document does not exist.");
    return;
  }

  const progressArray = userDoc.data().progress || [];

  // Step 2: Modify the progress array based on the status
  let updatedProgressArray;
  if (status === "in_progress") {
    // Check if the id already exists in the array
    const existingItem = progressArray.find((item) => item.id === id);

    if (!existingItem) {
      // Add new progress object
      updatedProgressArray = [...progressArray, { id, status }];
    } else {
      console.log("Progress already exists, skipping.");
      return;
    }
  } else if (status === "completed") {
    console.log("Updating progress to 'completed'");
    // Update the specific progress item's status to "completed"
    updatedProgressArray = progressArray.map((item) =>
      item.id === id ? { ...item, status: "completed" } : item,
    );
  }

  // Step 3: Write the updated array back to Firestore
  await updateDoc(userDocRef, {
    progress: updatedProgressArray,
  });

  console.log(`Progress updated to '${status}' for quiz ID: ${id}`);
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
