'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { useState } from 'react';

import * as S from './page.css';

import UserList from 'components/follow-list/UserList';
import getFilteredList from 'utils/getFilteredList';

function Page() {
  const token = sessionStorage.getItem('token') || undefined;

  const {
    data: { f4fList, notF4fList },
  } = useSuspenseQuery({
    queryKey: ['users'],
    queryFn: () => getFilteredList(token),
  });

  const [selectedMenu, setSelectedMenu] = useState<'f4fList' | 'notF4fList'>('f4fList');

  return (
    <div>
      <nav className={S.Nav}>
        <button className={S.Button} onClick={() => setSelectedMenu('notF4fList')}>
          맞팔 아닌 사람
        </button>
        <button className={S.Button} onClick={() => setSelectedMenu('f4fList')}>
          맞팔인 사람
        </button>
      </nav>
      <div>
        <UserList list={selectedMenu === 'f4fList' ? f4fList : notF4fList} selectedMenu={selectedMenu} />
      </div>
      <button>팔로우하기</button>
    </div>
  );
}

export default Page;
