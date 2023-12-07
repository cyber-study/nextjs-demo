/* eslint-disable react/prop-types */
"use client";
import axios from "axios";
import React,{useEffect} from "react";
// import propTypes from "prop-types";
// import classnames from "classnames";

// import css from "./style.scss";
// import css from "./style.less";

export async function getStaticProps(){
  const {data}=await axios({
    method:"GET",
    baseURL:"http://172.19.1.34:18652/",
    url:"/api/getNavigation"
  });
  return {props:{initialData:data.data}};
};


export default function IndexPage({initialData}:any){
  

  useEffect(()=>{
    console.log("asdasd","===>");
  },[]);

  return (
    <div>
      <pre>
        {JSON.stringify(initialData,null," ")}
      </pre>
    </div>
)};

