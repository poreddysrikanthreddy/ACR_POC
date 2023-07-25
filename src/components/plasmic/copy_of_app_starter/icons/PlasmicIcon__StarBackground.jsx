// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StarBackgroundIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.518 0l2.253 5.417 5.848.469-4.455 3.817 1.36 5.706-5.006-3.058-5.007 3.058 1.362-5.706L.417 5.886l5.848-.469L8.518 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarBackgroundIcon;
/* prettier-ignore-end */
