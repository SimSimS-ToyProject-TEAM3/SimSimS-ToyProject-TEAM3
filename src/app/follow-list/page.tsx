'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import * as S from './page.css';

import UserList from 'components/follow-list/UserList';
import getFilteredList from 'utils/getFilteredList';
import SessionStorage from 'utils/sessionStorage';

function Page() {
  const token = SessionStorage.getItem('token') || undefined;

  const { data: { f4fList, notF4fList } = { f4fList: [], notF4fList: [] } } = useQuery({
    queryKey: ['users'],
    queryFn: () => getFilteredList(token),
  });

  const [selectedMenu, setSelectedMenu] = useState<'f4fList' | 'notF4fList'>('f4fList');

  return (
    <div className={S.PageWrapper}>
      <nav className={S.Nav}>
        <button
          className={`${S.Btn} ${selectedMenu === 'notF4fList' ? S.SelectedBtn : ''}`}
          onClick={() => setSelectedMenu('notF4fList')}>
          맞팔 아닌 사람
        </button>
        <button
          className={`${S.Btn} ${selectedMenu === 'f4fList' ? S.SelectedBtn : ''}`}
          onClick={() => setSelectedMenu('f4fList')}>
          맞팔인 사람
        </button>
      </nav>
      <div>
        <UserList list={selectedMenu === 'f4fList' ? f4fList : notF4fList} selectedMenu={selectedMenu} />
      </div>
    </div>
  );
}

export default Page;
