// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function VectorIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 12"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.81 5.493L1.508.19A.647.647 0 001.047 0a.647.647 0 00-.461.19l-.39.39a.653.653 0 000 .923l4.452 4.452L.19 10.412a.648.648 0 00-.19.461c0 .175.068.339.19.461l.39.39a.65.65 0 00.462.191.647.647 0 00.46-.19L6.81 6.418A.648.648 0 007 5.955a.648.648 0 00-.19-.462z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
