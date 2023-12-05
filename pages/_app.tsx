import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>OurSOS - Emergency Alert</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
         <meta name="description" content="Learn more about OurSOS, a world wide emergency news alert translation app!" />
         <meta name="keywords" content="Emergency alerts while traveling, Travel alerts, Location-based safety, Emergency notifications translated" />
        <link rel="shortcut icon" href="/favicon.ico" />

      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
