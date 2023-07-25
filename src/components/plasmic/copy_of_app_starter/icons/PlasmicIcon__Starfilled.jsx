// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function StarfilledIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.932 1.284c.405-.934 1.73-.934 2.136 0l1.226 2.827 3.068.293c1.014.096 1.423 1.357.66 2.031l-2.31 2.04.67 3.007c.221.995-.851 1.774-1.728 1.256L7 11.17l-2.653 1.567c-.878.518-1.95-.261-1.728-1.256l.67-3.007-2.31-2.04c-.764-.674-.355-1.935.66-2.031l3.067-.293 1.226-2.827z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StarfilledIcon;
/* prettier-ignore-end */
