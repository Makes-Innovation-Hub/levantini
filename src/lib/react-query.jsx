import { QueryClient } from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
});

import React from "react";
import { db } from "./firebaseSetup";
import { collection, getDocs } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";

const ReactQuery = () => {
  const fetchEvents = async () => {
    console.log("Fetching events from Levnantini-Real-Data-Events-Collection");
    const questionCollection = collection(db, "Levnantini-Real-Data-Events-Collection");
    const questionSnapshot = await getDocs(questionCollection);

    if (!questionSnapshot.empty) {
      const questions = questionSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched events: ", questions);
      return questions;
    } else {
      console.log("No questions found in Levnantini-Real-Data-Events-Collection.");
      return [];
    }
  };

  const {
    data: category,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["data"],
    queryFn: fetchEvents,
  });

  return (
    <>
      <AppContext.Provider
        value={{
          // user,
          category,
          isLoading,
          error,
        }}
      ></AppContext.Provider>
    </>
  );
};

export default ReactQuery;
