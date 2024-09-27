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
      viewBox={"0 0 20 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M19.073 7.664L2.619.184C1.237-.446-.363.644.073 1.919l2.255 6.666c.09.277.09.553 0 .83L.073 16.08c-.436 1.274 1.164 2.365 2.546 1.735l16.454-7.48c.28-.13.514-.32.678-.553.163-.232.249-.497.249-.768 0-.27-.086-.535-.25-.768a1.686 1.686 0 00-.677-.553v-.03z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
