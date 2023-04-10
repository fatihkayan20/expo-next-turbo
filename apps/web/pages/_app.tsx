import type { AppProps } from "next/app";
import "../styles/global.css";
import * as React from "react";

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}
