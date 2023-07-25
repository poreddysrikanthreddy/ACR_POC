// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AntDesignheartFilledIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.041 8.309a7.618 7.618 0 00-1.667-2.426 7.774 7.774 0 00-5.46-2.22A7.824 7.824 0 0015 5.392a7.824 7.824 0 00-4.913-1.731 7.773 7.773 0 00-5.461 2.22 7.572 7.572 0 00-2.282 5.412c0 .976.199 1.992.594 3.026.332.865.806 1.761 1.413 2.666.96 1.433 2.282 2.927 3.922 4.442 2.72 2.51 5.412 4.245 5.526 4.315l.694.446a.94.94 0 001.01 0l.695-.446a44.411 44.411 0 005.526-4.315c1.64-1.515 2.962-3.01 3.922-4.442.607-.905 1.084-1.801 1.413-2.666.395-1.034.594-2.05.594-3.026a7.458 7.458 0 00-.612-2.985z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignheartFilledIcon;
/* prettier-ignore-end */
