'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import * as S from './TokenInputContainer.css';
import GithubIcon from '../../assets/svgs/github.svg';
import InfoIcon from '../../assets/svgs/info.svg';

import SessionStorage from 'utils/sessionStorage';

function TokenInputContainer() {
  const [token, setToken] = useState('');
  const router = useRouter();

  const handleChangeTokenInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleClickFollowerCheckButton = () => {
    SessionStorage.setItem('token', token);
    router.push('/follow-list');
  };

  return (
    <div className={S.TokenInputContainerWrapper}>
      <button className={S.CreateTokenButton}>Github Token 만들러 가기</button>
      <div className={S.CreateTokenNoticeWrapper}>
        <InfoIcon />
        <p className={S.CreateTokenNotice}>토큰 발급시 권한 user(Update ALL user data)를 체크해주세요!</p>
      </div>
      <input
        className={S.TokenInput}
        placeholder="Github Token을 입력해주세요"
        onChange={handleChangeTokenInput}
        value={token}
      />
      <button className={S.FollowerCheckButton} onClick={handleClickFollowerCheckButton}>
        나의 맞팔 확인하기
      </button>
      <p className={S.OrText}>or</p>
      <div className={S.LoginWrapper}>
        <p className={S.LoginText}>깃허브 로그인으로 간단하게 확인하기 👉🏻</p>
        <button className={S.LoginButton}>
          <GithubIcon />
          <p className={S.LoginButtonText}>깃허브 로그인</p>
        </button>
      </div>
    </div>
  );
}

export default TokenInputContainer;
