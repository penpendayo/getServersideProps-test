import React from "react";

const index = ({ item }: any) => {
  console.log(item);
  return <div>{item}</div>;
};

export default index;

export const getServerSideProps = async () => {
  //以下のconsole.logはブラウザで実行されない
  console.log("[id] next.js");
  return {
    props: {
      item: "[id] world",
    },
  };
};