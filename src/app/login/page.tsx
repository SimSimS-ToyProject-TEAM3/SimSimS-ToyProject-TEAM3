'use client';

import styled from '@emotion/styled';

import TokenInputContainer from 'components/login/TokenInputContainer';

function Page() {
  return (
    <PageWrapper>
      <TokenInputContainer />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.colors.lightYellow};
`;

export default Page;
