// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FacebookIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14.636.837L12.32.833c-2.6 0-4.28 1.771-4.28 4.512v2.08H5.714a.369.369 0 00-.364.374v3.014c0 .207.163.374.364.374H8.04v7.606a.37.37 0 00.364.374h3.036a.369.369 0 00.364-.374v-7.606h2.72a.369.369 0 00.365-.373V7.798a.38.38 0 00-.106-.264.36.36 0 00-.257-.11h-2.722V5.662c0-.848.197-1.278 1.271-1.278h1.56a.37.37 0 00.363-.374v-2.8a.37.37 0 00-.363-.374z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FacebookIcon;
/* prettier-ignore-end */
