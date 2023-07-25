// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HeartoutlineIcon(props) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M8 13.272C4.934 11.526 3.223 9.79 2.397 8.284c-.847-1.541-.773-2.84-.303-3.76.965-1.895 3.71-2.5 5.383-.385L8 4.8l.523-.661c1.672-2.115 4.418-1.51 5.383.384.47.921.543 2.22-.303 3.76-.827 1.507-2.537 3.242-5.603 4.989zM8 2.738C5.647.502 2.176 1.426.906 3.918c-.697 1.367-.707 3.134.322 5.008 1.02 1.856 3.052 3.816 6.45 5.694l.322.178.322-.178c3.397-1.878 5.43-3.838 6.45-5.694 1.028-1.874 1.019-3.641.322-5.008C13.824 1.426 10.353.502 8 2.738z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HeartoutlineIcon;
/* prettier-ignore-end */
