// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PinterestIcon(props) {
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
          "M10.251.833C5.191.834 2.5 4.053 2.5 7.565c0 1.628.916 3.659 2.383 4.303.419.187.363-.041.723-1.409a.323.323 0 00-.078-.318c-2.097-2.409-.41-7.36 4.424-7.36 6.995 0 5.688 9.61 1.217 9.61-1.152 0-2.011-.897-1.74-2.009.33-1.324.974-2.747.974-3.701 0-2.405-3.607-2.048-3.607 1.138 0 .985.35 1.65.35 1.65L5.77 14.994c-.364 1.473.05 3.857.086 4.063.022.113.15.149.221.055.115-.148 1.518-2.136 1.911-3.573.143-.523.73-2.647.73-2.647.387.694 1.502 1.274 2.69 1.274 3.537 0 6.092-3.086 6.092-6.915C17.488 3.58 14.324.833 10.251.833z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PinterestIcon;
/* prettier-ignore-end */
