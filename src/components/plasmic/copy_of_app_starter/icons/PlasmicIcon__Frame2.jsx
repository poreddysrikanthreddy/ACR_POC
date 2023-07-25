// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Frame2Icon(props) {
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
          "M12.38 14.235a19.87 19.87 0 004.546-1.092A7.473 7.473 0 0115 8.125V7.5a5 5 0 00-10 0v.625a7.472 7.472 0 01-1.927 5.018c1.445.534 2.967.904 4.546 1.092m4.762 0c-1.582.188-3.18.188-4.762 0m4.762 0a2.5 2.5 0 11-4.762 0"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Frame2Icon;
/* prettier-ignore-end */
