import React from "react";

import "./homepage.css";
import Layout from "../../layout/Layout";
import Title from "../../components/title/Title";
import Content from "../../components/content/Content";
import Success from "../../components/notify/success/Success";
import Alert from "../../components/notify/alert/Alert";
import Checker from "../../components/checker/Checker";

const Homepage = () => {
  return (
    <>
      <Layout title="VAT Checker">
        <main>
          <Content />
          <Title />
          <Checker />
          <Success />
          <Alert />
        </main>
      </Layout>
    </>
  );
};

export default Homepage;
