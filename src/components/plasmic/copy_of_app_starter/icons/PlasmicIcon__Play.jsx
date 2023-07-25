// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PlayIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
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
          "M21.424 13.881a2.667 2.667 0 010 4.238l-6.107 4.667c-1.755 1.341-4.286.09-4.286-2.119v-9.334c0-2.209 2.531-3.46 4.286-2.119l6.107 4.667zm-1.62 2.12l-6.106-4.668v9.334L19.804 16z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12S22.627 4 16 4zM1.333 16C1.333 7.9 7.9 1.333 16 1.333S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlayIcon;
/* prettier-ignore-end */
