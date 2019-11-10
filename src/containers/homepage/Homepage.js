import React, { useState } from "react";

import Layout from "../../layout/Layout";
import Title from "../../components/title/Title";
import Content from "../../components/content/Content";
import Success from "../../components/notify/success/Success";
import Alert from "../../components/notify/alert/Alert";
import Checker from "../../components/checker/Checker";
import axios from "../../axios.api";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [isError, setIsError] = useState(null);

  const checkVATHandler = e => {
    console.log("vaSDt", e);
    try {
      axios
        .get("/vat/check?vat_number=" + e)
        .then(response => {
          console.log(response);
          const data = response.data.data;
          setData(data);
          setIsError(false);
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            setData(error.response.data);
            setIsError(true);
          }
        });
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
  };

  return (
    <>
      <Layout title="VAT Checker">
        <main>
          <Content />
          <Title />
          <Checker check={e => checkVATHandler(e)} />
          {data !== null ? (
            !isError ? (
              <Success
                name={data.trader_name}
                address={data.trader_address}
              />
            ) : (
              <Alert 
                message={data.message}
              />
            )
          ) : null}
        </main>
      </Layout>
    </>
  );
};

export default Homepage;
