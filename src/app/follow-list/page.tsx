'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useState } from 'react';

import UserList from 'components/follow-list/UserList';
import getFilteredLists from 'utils/getFilteredList';

export const Page = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['users'],
    queryFn: () => getFilteredLists('토큰'), //토큰은 외부에서 가져올 것
  });

  const { f4fList, notF4fList } = data;

  const [selectedMenu, setSelectedMenu] = useState<'f4fList' | 'notF4fList'>('f4fList');

  return (
    <div>
      <button onClick={() => setSelectedMenu(selectedMenu === 'f4fList' ? 'notF4fList' : 'f4fList')}>
        {selectedMenu === 'f4fList' ? '날 팔로우하지 않는 사람 보기' : '나와 맞팔인 사람 보기'}
      </button>
      <div>{selectedMenu === 'f4fList' ? <UserList list={f4fList} /> : <UserList list={notF4fList} />}</div>
    </div>
  );
};

export default Page;
