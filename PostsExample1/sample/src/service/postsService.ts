import axios from "../utils/api";
import { API_URL } from "../utils/constants";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = async (userId: number): Promise<Post[]> => {
  const response = await axios.get<Post[]>(`${API_URL}/posts?userId=${userId}`);
  return response.data;
};
