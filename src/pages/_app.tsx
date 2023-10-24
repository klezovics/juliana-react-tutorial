import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ReactQueryDevtools} from 'react-query/devtools'

import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import React from "react";

const queryClient = new QueryClient();
export default function App({Component, pageProps}: AppProps) {
    // @ts-ignore
    return (
        <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
        </QueryClientProvider>
    )
}
