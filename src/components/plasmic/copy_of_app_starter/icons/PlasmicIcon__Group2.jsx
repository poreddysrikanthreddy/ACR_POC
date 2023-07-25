// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.003 12.075C24.003 5.406 18.63 0 12.003 0 5.373.002 0 5.406 0 12.076c0 6.026 4.389 11.021 10.125 11.927v-8.438H7.08v-3.489h3.048V9.415c0-3.026 1.793-4.696 4.533-4.696 1.314 0 2.687.235 2.687.235v2.97h-1.514c-1.49 0-1.954.931-1.954 1.887v2.265h3.326l-.53 3.489h-2.798v8.438c5.736-.906 10.125-5.901 10.125-11.927z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group2Icon;
/* prettier-ignore-end */
