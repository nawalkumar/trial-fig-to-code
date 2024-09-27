// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IonHomeIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.326 5.34a.498.498 0 00-.324-.116.498.498 0 00-.324.117L3.89 14.615a.425.425 0 00-.108.14.385.385 0 00-.037.166l-.002 8.704c0 .448.198.877.55 1.193a1.98 1.98 0 001.325.494h5.631a.993.993 0 00.663-.247.804.804 0 00.274-.596v-7.172a.4.4 0 01.138-.298.497.497 0 01.331-.124h4.688c.124 0 .243.044.331.124a.4.4 0 01.137.298v7.172c0 .223.1.438.275.596a.993.993 0 00.663.247h5.628a1.98 1.98 0 001.326-.494c.352-.316.55-.745.55-1.193v-8.704a.385.385 0 00-.038-.166.424.424 0 00-.107-.14L15.326 5.341z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M28.764 12.875l-4.383-3.774V3.375a.803.803 0 00-.274-.597.993.993 0 00-.663-.247H20.63a.993.993 0 00-.663.247.803.803 0 00-.274.597v1.688L16.3 2.143c-.317-.29-.79-.455-1.3-.455-.509 0-.98.165-1.297.455L1.24 12.874c-.365.316-.41.837-.079 1.18a.933.933 0 00.3.207 1.02 1.02 0 001.059-.151L14.678 3.653a.498.498 0 01.324-.117c.12 0 .236.042.324.117l12.16 10.457a.991.991 0 00.666.234.989.989 0 00.657-.258c.36-.335.33-.889-.045-1.21z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IonHomeIcon;
/* prettier-ignore-end */
