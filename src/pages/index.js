import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Welcome from "/welcome";


export default function Home() {
  const colors = {
    brand: {
      900: "#F7FAFC",
      800: "#718096",
      700: "#CBD5E0",
      600: "#191919",
      500: "#b7fcc2",
    },

  };
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>Gabe&apos;s First Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Welcome />
      </ChakraProvider>
    </>
  );
}
