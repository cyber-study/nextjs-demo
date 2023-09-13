"use client"
/* eslint-disable react/prop-types */
import axios from "axios";
import Image from "next/image";
import React,{useState,useEffect} from "react";
// import propTypes from "prop-types";
// import classnames from "classnames";

import css from "./style.module.scss";

/**
 * @description use client (客户端渲染) 的使用请参考以下链接
 * @see https://nextjs.org/docs/app/building-your-application/rendering/client-components
 *
 * @description 客户端渲染的模式下跟以前一样请求不同域的接口需要配置http-proxy
 * @see https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites
 * **/
export default function ClientRenderDemo(){

  const [movive_data,set_movive_data]=useState(null);

  useEffect(()=>{
    (async ()=>{
      const { data: movive_data }=await axios({
        method: "GET",
        baseURL: "/",
        url: "/j/search_subjects",
        params: { tag: "热门" }
      });
      set_movive_data(movive_data);
    })();
  },[]);

  if(!movive_data){
    return null;
  };

  return (
    <div className={css.page}>
      <div className={css.container}>
        {((movive_data as any).subjects||[]).map(({id,title,cover}:any)=>{
          return (
            <div key={id} className={css.card}>
              <Image src={cover} width={150} height={200} sizes="200px,200px" priority alt={title} />
              <div className={css.title}>{title}</div>
            </div>
          )
        })}
      </div>
    </div>
)};
