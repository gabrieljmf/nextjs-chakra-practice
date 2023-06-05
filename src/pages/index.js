import Head from "next/head";
import Welcome from "./Welcome"
import About from "./About"

export default function Home() {
  return (
    <>
      <Head>
        <title>Practice App by Gabe</title>
        <meta name="description" content="Meet Gabe!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      < Welcome />
      < About />
    </>
  );
}
