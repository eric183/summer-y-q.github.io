import "~/styles/globals.css";

import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import React from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});
// getRandomInt();
export default function MyApp({ Component, pageProps }: any) {
  // console.log(ChainId.Mainnet);
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThirdwebProvider>
  );
}

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
