import { useState } from 'react';

import AllCheckbox from './AllCheckBox';
import FollowButton from './FollowButton';
import UserItem from './UserItem';
import * as S from './UserList.css';

import { User } from 'apis/getFollowData';

interface UserListProps {
  list: User[];
  selectedMenu: 'f4fList' | 'notF4fList';
}

export default function UserList({ list, selectedMenu }: UserListProps) {
  const [checkList, setCheckList] = useState<string[]>([]);
  const [isAllChecked, setIsAllChecked] = useState(false);

  return (
    <div className={S.UserListWrapper}>
      {/* checkList 확인용 코드 
      {selectedMenu === 'notF4fList' && (
        <>
          <span>checkList : </span>{' '}
          {checkList.map((username) => (
            <span key={username}>{username}, </span>
          ))}
        </>
      )}*/}
      {list.length == 0 ? (
        <span className={S.Description}>목록이 비어있어요!</span>
      ) : (
        <>
          {selectedMenu === 'notF4fList' && (
            <AllCheckbox
              isAllChecked={isAllChecked}
              setIsAllChecked={setIsAllChecked}
              list={list}
              setCheckList={setCheckList}
            />
          )}
          {list.map((user) => (
            <UserItem
              username={user.login}
              userImgSrc={user.avatar_url}
              key={user.id}
              checkList={checkList}
              isAllChecked={isAllChecked}
              setCheckList={setCheckList}
              selectedMenu={selectedMenu}
            />
          ))}
        </>
      )}
      {selectedMenu === 'notF4fList' && <FollowButton checkList={checkList} />}
    </div>
  );
}
