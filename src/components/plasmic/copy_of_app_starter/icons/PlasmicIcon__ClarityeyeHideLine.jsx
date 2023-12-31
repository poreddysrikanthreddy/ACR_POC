// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function ClarityeyeHideLineIcon(props) {
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
        d={
          "M11.196 9.067c.127-.341.192-.703.19-1.067a3.05 3.05 0 00-3.048-3.049c-.36 0-.717.065-1.054.191L8 5.88A2.164 2.164 0 0110.498 8c0 .11-.01.22-.027.329l.725.738z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M15.24 7.791c-1.498-2.769-4.124-4.444-7.031-4.444a7.476 7.476 0 00-2.329.377l.716.72a6.57 6.57 0 011.613-.208c2.502 0 4.778 1.395 6.133 3.746A7.887 7.887 0 0112.4 10.25l.631.631a8.857 8.857 0 002.222-2.667L15.37 8l-.129-.209zM2.164 2.569L4.147 4.55a8.676 8.676 0 00-2.974 3.24L1.058 8l.115.213c1.498 2.77 4.125 4.445 7.031 4.445a7.526 7.526 0 003.276-.751l2.222 2.222.778-.667L2.924 1.907l-.76.662zm4.334 4.333l2.955 2.956a2.138 2.138 0 01-1.11.32A2.165 2.165 0 016.177 8c.005-.388.115-.768.32-1.098zm-.645-.644a3.044 3.044 0 004.245 4.244l.71.711a6.628 6.628 0 01-2.604.534c-2.502 0-4.777-1.396-6.133-3.747a7.684 7.684 0 012.72-2.8l1.062 1.058z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClarityeyeHideLineIcon;
/* prettier-ignore-end */
