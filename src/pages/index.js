import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
    </Layout>
  );
};

export default IndexPage;
