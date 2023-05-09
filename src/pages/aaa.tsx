import { GetServerSideProps } from "next";
import React from "react";

const index = ({ item }: any) => {
  console.log(item);
  return <div>{item}</div>;
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //以下のconsole.logはブラウザで実行されない
  console.log("hello next.js");
  return {
    props: {
      item: "hello world",
    },
  };
};