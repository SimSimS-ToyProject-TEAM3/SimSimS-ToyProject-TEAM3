import { useMutation } from '@tanstack/react-query';
import React from 'react';

import * as S from './FollowButton.css';

import followSelectedUsers from 'utils/followSelectedUsers';

interface FollowButtonProps {
  checkList: string[];
}

function FollowButton({ checkList }: FollowButtonProps) {
  const token = sessionStorage.getItem('token') || undefined;

  const mutation = useMutation({
    mutationFn: () => followSelectedUsers(token, checkList),
  });

  const handleClickFollowButton = () => {
    mutation.mutate();
  };

  return (
    <div className={S.FollowButtonWrapper}>
      <button
        className={`${S.FollowButton} ${checkList.length !== 0 && S.Activate} `}
        onClick={handleClickFollowButton}>
        맞팔하기!
      </button>
    </div>
  );
}

export default FollowButton;
