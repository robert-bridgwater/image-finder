import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import client from "./api/apolloClient";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
