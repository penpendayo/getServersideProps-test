import { GetServerSideProps } from "next";
import React from "react";

const index = ({ item }: any) => {
  console.log(item);
  return <div>{item}</div>;
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //以下のconsole.logはブラウザで実行されない
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=86400"
  );
  console.log("[id] next.js");
  return {
    props: {
      item: new Date().toISOString(),
    },
  };
};
