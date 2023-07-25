// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function FrameIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.781 9.188V5.25a3.281 3.281 0 00-6.562 0v3.938m9.936-1.744l1.105 10.5a.984.984 0 01-.979 1.087H3.72a.983.983 0 01-.98-1.087l1.106-10.5a.984.984 0 01.979-.881h11.352c.504 0 .927.38.98.88zM7.547 9.188a.328.328 0 11-.656 0 .328.328 0 01.656 0zm6.562 0a.328.328 0 11-.656 0 .328.328 0 01.656 0z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
