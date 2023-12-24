import { useState } from 'react';

import FollowButton from './FollowButton';
import UserItem from './UserItem';

import { User } from 'apis/getFollowData';

interface UserListProps {
  list: User[];
  selectedMenu: 'f4fList' | 'notF4fList';
}

export default function UserList({ list, selectedMenu }: UserListProps) {
  const [checkList, setCheckList] = useState<string[]>([]);

  return (
    <>
      {/* checkList 확인용 코드 */}
      {selectedMenu === 'notF4fList' && (
        <>
          <span>checkList : </span>{' '}
          {checkList.map((username) => (
            <span key={username}>{username}, </span>
          ))}
        </>
      )}
      {list.map((user) => (
        <UserItem
          username={user.login}
          key={user.id}
          checkList={checkList}
          setCheckList={setCheckList}
          selectedMenu={selectedMenu}
        />
      ))}
      <FollowButton checkList={checkList} />
    </>
  );
}
