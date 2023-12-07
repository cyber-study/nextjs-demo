/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "next/router";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";


export async function getServerSideProps({ params }:any){
  return {props:{ params }};
};

const ColumnName=withRouter(({ params }:any)=>{
  console.log("routparamser",params);
  return (
    <div>
      <h1>header</h1>
      <p>Post:{JSON.stringify(params)}</p>
      <h1>footer</h1>
    </div>
  )
});


ColumnName.propTypes={

};

ColumnName.defaultProps={

};

export default ColumnName;
