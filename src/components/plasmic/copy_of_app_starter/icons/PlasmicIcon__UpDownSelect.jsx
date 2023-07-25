// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UpDownSelectIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M8 .667l4.619 6H3.38l4.62-6zm0 14.666l-4.619-6.5h9.238L8 15.333z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UpDownSelectIcon;
/* prettier-ignore-end */
