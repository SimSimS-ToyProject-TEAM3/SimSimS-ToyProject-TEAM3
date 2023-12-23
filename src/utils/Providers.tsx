'use client';

import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Error from 'components/common/Error';
import Loading from 'components/common/Loading';

// import getFilteredList from './getFilteredList';

function Providers({ children }: React.PropsWithChildren) {
  const [queryClient] = React.useState(new QueryClient());
  //   queryClient.prefetchQuery({
  //     queryKey: ['users'],
  //     queryFn: () => getFilteredList('토큰'),
  //   });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <Error error={error} resetErrorBoundary={resetErrorBoundary} />
              )}
              onReset={reset}>
              <React.Suspense fallback={<Loading />}>{children}</React.Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
