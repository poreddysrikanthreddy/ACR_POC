// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BicartIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 1.688a.563.563 0 01.563-.563H2.25a.562.562 0 01.546.426l.455 1.824h13.061a.562.562 0 01.553.666l-1.688 9a.563.563 0 01-.552.459H4.5a.563.563 0 01-.552-.459L2.26 4.058 1.81 2.25H.563A.562.562 0 010 1.687zM3.49 4.5l1.477 7.875h9.191L15.635 4.5H3.49zm2.135 9a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm7.875 0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-7.875 1.125a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25zm7.875 0a1.125 1.125 0 110 2.25 1.125 1.125 0 010-2.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BicartIcon;
/* prettier-ignore-end */
