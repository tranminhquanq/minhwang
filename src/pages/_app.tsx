import type { AppProps } from "next/app";
import Head from "next/head";
import Nav from "@/components/Nav";

import "@/assets/styles/font.css";
import "@/assets/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-full h-full">
        <Nav />
        <div className="w-full">
          <Component {...pageProps} />
        </div>
      </main>
    </>
  );
}
