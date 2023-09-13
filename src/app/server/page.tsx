/* eslint-disable react/prop-types */
import React from "react";
import axios from "axios";
import Image from "next/image";
// import propTypes from "prop-types";
// import classnames from "classnames";

import css from "./style.module.scss";

/**
 * async function ServerRenderDemo 这种写法只有在服务端渲染的时候才可以使用
 * @description next.js框架默认使用 (服务端端渲染) 的使用请参考以下链接
 * @see https://nextjs.org/docs/app/building-your-application/rendering/server-components
 * **/
export default async function ServerRenderDemo(){

  const { data: movive_data } =await axios({
    method: "GET",
    baseURL: "https://movie.douban.com/",
    url: "/j/search_subjects",
    params: { tag: "热门" }
  });

  return (
    <div className={css.page}>
      <div className={css.container}>
        {(movive_data.subjects||[]).map(({id,title,cover}:any)=>{
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