// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LeftIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M9.207 17.207a1 1 0 01-1.414 0l-4.5-4.5a1 1 0 010-1.414l4.5-4.5a1 1 0 011.414 1.414L6.414 11H20a1 1 0 110 2H6.414l2.793 2.793a1 1 0 010 1.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LeftIcon;
/* prettier-ignore-end */
