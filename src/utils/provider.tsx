'use client';

import React, { useState } from 'react';
import { QueryClientProvider, QueryClient, useQueryErrorResetBoundary, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import { ErrorBoundary } from 'react-error-boundary';
import { fetchFollowingInfo } from 'apis/followData';

function Providers({ children }: React.PropsWithChildren) {
    const [queryClient] = React.useState(new QueryClient());
    const { reset } = useQueryErrorResetBoundary();

    // queryClient.prefetchQuery({
    //     queryKey: ['users'],
    //     queryFn: () => fetchFollowingInfo(''),
    // })


    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryStreamedHydration>
                <QueryErrorResetBoundary>
                    {({ reset }) => (
                        <ErrorBoundary
                            fallbackRender={({ error, resetErrorBoundary }) => (
                                <div>
                                    There was an error!{' '}
                                    <button onClick={() => resetErrorBoundary()}>Try again</button>
                                    <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
                                </div>
                            )}
                            onReset={reset}
                        >
                            <React.Suspense fallback={<h1>loading...</h1>}>
                                {children}
                            </React.Suspense>
                        </ErrorBoundary>
                    )}
                </QueryErrorResetBoundary>
            </ReactQueryStreamedHydration >
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider >
    )
}

export default Providers;