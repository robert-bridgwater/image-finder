import Head from "next/head";
import React from "react";

import { Heading, Container } from "../";

// import styles from "./styles.module.css";

const Home: React.FC = ({}) => {
  return (
    <>
      <Head>
        <title>Template Application</title>
        <meta name="description" content="Template application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Container size="m">
          <Heading heading="Template Application" />
        </Container>
      </main>
    </>
  );
};

export default Home;
