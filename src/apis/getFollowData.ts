import { Client } from '.';

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
}

const PER_PAGE = 100;

export const getFollowingList = async (token: string): Promise<User[]> => {
  const { data } = await Client(token).get<User[]>(`/user/following?per_page=${PER_PAGE}`);
  return data;
};

export const getFollowersList = async (token: string): Promise<User[]> => {
  const { data } = await Client(token).get<User[]>(`/user/followers?per_page=${PER_PAGE}`);
  return data;
};
