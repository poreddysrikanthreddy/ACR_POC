// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 72 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M30.827 22.685h-5.803L28.651.398h5.803l-3.627 22.287zM20.143.398l-5.532 15.33-.654-3.302v.001L12.005 2.405S11.769.398 9.252.398H.107L0 .776s2.797.581 6.07 2.547l5.04 19.363h6.046L26.388.398h-6.245zM65.78 22.685h5.328L66.464.398H61.8c-2.154 0-2.679 1.66-2.679 1.66l-8.654 20.627h6.05l1.209-3.31h7.376l.68 3.31zM59.397 14.8l3.048-8.34 1.716 8.34h-4.764zM50.92 5.758l.83-4.786S49.194 0 46.531 0c-2.88 0-9.718 1.258-9.718 7.378 0 5.758 8.026 5.83 8.026 8.854 0 3.024-7.199 2.482-9.575.575l-.862 5.004s2.59 1.258 6.55 1.258c3.959 0 9.932-2.05 9.932-7.63 0-5.794-8.097-6.334-8.097-8.853 0-2.52 5.651-2.197 8.134-.828z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
