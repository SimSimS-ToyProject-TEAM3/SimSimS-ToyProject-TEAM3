import { followUser } from 'apis/followUser';

const followSelectedUsers = async (token: string = '', checkList: string[]) => {
  checkList.forEach((username) => {
    console.log(token);
    followUser(token, username);
  });
};

export default followSelectedUsers;
