import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async (query) => {
      console.log("fetching........");
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return data;
    },
  });
};

export const fetchPosts = async () => {
  console.log("fetching");

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("fetched");
  return data;
};
