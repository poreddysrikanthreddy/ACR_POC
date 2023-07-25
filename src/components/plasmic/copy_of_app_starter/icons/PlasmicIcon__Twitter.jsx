// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TwitterIcon(props) {
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
          "M18.75 4.81a7.419 7.419 0 01-2.061.542 3.483 3.483 0 001.578-1.9 7.435 7.435 0 01-2.281.834 3.655 3.655 0 00-2.62-1.086c-1.983 0-3.59 1.54-3.59 3.437 0 .269.03.531.092.783C6.885 7.276 4.24 5.908 2.47 3.828a3.301 3.301 0 00-.485 1.728c0 1.193.634 2.245 1.596 2.86a3.712 3.712 0 01-1.626-.43v.042c0 1.665 1.238 3.054 2.88 3.37a3.767 3.767 0 01-.946.121c-.232 0-.456-.022-.676-.064.457 1.367 1.782 2.36 3.353 2.388a7.409 7.409 0 01-4.459 1.469 7.98 7.98 0 01-.856-.047 10.477 10.477 0 005.503 1.546c6.604 0 10.213-5.237 10.213-9.78l-.012-.445A7.01 7.01 0 0018.75 4.81z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwitterIcon;
/* prettier-ignore-end */
