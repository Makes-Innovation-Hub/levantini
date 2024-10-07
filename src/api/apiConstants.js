import { api } from "@/lib/axios";

export const fetchPosts = async () => {
  return await api.get("/posts");
};
