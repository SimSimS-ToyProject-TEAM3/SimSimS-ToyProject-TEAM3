import { useMutation } from '@tanstack/react-query';
import React from 'react';

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

  return <button onClick={handleClickFollowButton}>FollowButton</button>;
}

export default FollowButton;
