import { User, getFollowersList, getFollowingList } from 'apis/getFollowData';

const getFilteredList = async (token: string = '') => {
  const followingList: User[] = await getFollowingList(token);
  const followersList: User[] = await getFollowersList(token);

  const f4fList = followingList.filter((followingUser) => {
    return followersList.some((follower) => follower.id === followingUser.id);
  });

  const notF4fList = followersList.filter((follower) => {
    return !followingList.some((followingUser) => followingUser.id === follower.id);
  });

  return { f4fList, notF4fList };
};

export default getFilteredList;
