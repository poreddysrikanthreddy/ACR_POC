// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function DownChevronIcon(props) {
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
          "M13.138 5.529c.26.26.26.682 0 .942l-4.667 4.667a.667.667 0 01-.942 0L2.862 6.471a.667.667 0 11.943-.942L8 9.724l4.195-4.195c.26-.26.683-.26.943 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DownChevronIcon;
/* prettier-ignore-end */
