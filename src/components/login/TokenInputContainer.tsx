'use client';

import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import * as S from './TokenInputContainer.css';
import GithubIcon from '../../assets/svgs/github.svg';
import InfoIcon from '../../assets/svgs/info.svg';

function TokenInputContainer() {
  const [token, setToken] = useState('');
  const router = useRouter();

  const handleChangeTokenInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleClickFollowerCheckButton = () => {
    sessionStorage.setItem('token', token);
    router.push('/follow-list');
  };

  return (
    <></>
    // <TokenInputContainerWrapper>
    //   <button className={S.createTokenButton}>Github Token 만들러 가기</button>
    //   <CreateTokenNoticeWrapper>
    //     <SmallInfoIcon />
    //     <CreateTokenNotice>토큰 발급시 권한 user(Update ALL user data)를 체크해주세요!</CreateTokenNotice>
    //   </CreateTokenNoticeWrapper>
    //   <TokenInput placeholder="Github Token을 입력해주세요" onChange={handleChangeTokenInput} value={token} />
    //   <FollowerCheckButton onClick={handleClickFollowerCheckButton}>나의 맞팔 확인하기</FollowerCheckButton>
    //   <OrText>or</OrText>
    //   <LoginWrapper>
    //     <LoginText>깃허브 로그인으로 간단하게 확인하기 👉🏻</LoginText>
    //     <LoginButton>
    //       <GithubIcon />
    //       <LoginButtonText>깃허브 로그인</LoginButtonText>
    //     </LoginButton>
    //   </LoginWrapper>
    // </TokenInputContainerWrapper>
  );
}

// const TokenInputContainerWrapper = styled.div`
//   display: flex;
//   flex-direction: column;

//   width: 100%;
//   padding: 1.2rem;

//   background-color: ${({ theme }) => theme.colors.white};
//   border: 0.3rem solid ${({ theme }) => theme.colors.black};
//   border-radius: 1.4rem;
// `;

// const CreateTokenButton = styled.button`
//   width: 15rem;
//   height: 2.5rem;

//   background-color: ${({ theme }) => theme.colors.green};
//   border-radius: 9rem;

//   ${({ theme }) => theme.fonts.body2}

//   color: ${({ theme }) => theme.colors.white};

//   box-shadow: rgba(0, 0, 0, 0.25) 0px 0.4rem 0.4rem;
// `;

// const CreateTokenNoticeWrapper = styled.div`
//   display: flex;
//   column-gap: 0.2rem;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const SmallInfoIcon = styled(InfoIcon)`
//   width: 2rem;
//   height: 2rem;
// `;

// const CreateTokenNotice = styled.p`
//   ${({ theme }) => theme.fonts.body2}
// `;

// const TokenInput = styled.input`
//   width: 100%;
//   height: 4.3rem;
//   padding: 0 1.5rem;
//   margin-top: 0.8rem;

//   border: 0.2rem solid ${({ theme }) => theme.colors.lightGray};
//   border-radius: 0.3rem;

//   ${({ theme }) => theme.fonts.body2}

//   &::placeholder {
//     ${({ theme }) => theme.fonts.body2}

//     color: ${({ theme }) => theme.colors.lightGray};
//   }
// `;

// const FollowerCheckButton = styled.button`
//   width: 100%;
//   height: 4.3rem;
//   margin-top: 0.8rem;

//   background-color: ${({ theme }) => theme.colors.yellow};
//   border: 0.2rem solid ${({ theme }) => theme.colors.black};
//   border-radius: 0.3rem;

//   ${({ theme }) => theme.fonts.body2}

//   color: ${({ theme }) => theme.colors.black};
// `;

// const OrText = styled.p`
//   margin: 1rem auto;

//   ${({ theme }) => theme.fonts.body1}
// `;

// const LoginWrapper = styled.div`
//   display: flex;
//   column-gap: 2rem;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const LoginText = styled.p`
//   ${({ theme }) => theme.fonts.body2}
// `;

// const LoginButton = styled.button`
//   display: flex;
//   column-gap: 0.8rem;
//   align-items: center;
//   justify-content: center;

//   width: 12.5rem;
//   height: 4rem;

//   color: ${({ theme }) => theme.colors.black};

//   background-color: ${({ theme }) => theme.colors.brightYellow};
//   border: 0.2rem solid ${({ theme }) => theme.colors.black};
//   border-radius: 2rem;
// `;

// const LoginButtonText = styled.p`
//   ${({ theme }) => theme.fonts.body2}
// `;

export default TokenInputContainer;
