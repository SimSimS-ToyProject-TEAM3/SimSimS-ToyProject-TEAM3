import { followUser } from 'apis/followUser';

const followSelectedUsers = async (token: string = '', checkList: string[]) => {
  checkList.forEach((username) => {
    followUser(token, username);
  });
};

export default followSelectedUsers;
