// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 29"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23.073 28.62c-1.255 0-3.017-.451-5.657-1.917-3.21-1.789-5.693-3.44-8.885-6.604-3.079-3.057-4.576-5.036-6.673-8.827C-.51 6.992-.107 4.748.345 3.789.882 2.643 1.675 1.957 2.7 1.277a11.36 11.36 0 011.841-.97L4.72.228C5.038.086 5.52-.13 6.13.1c.408.152.772.463 1.342 1.022 1.168 1.145 2.764 3.695 3.353 4.947.395.844.657 1.4.658 2.026 0 .731-.37 1.295-.82 1.904-.084.114-.168.223-.249.33-.489.638-.596.823-.526 1.153.144.662 1.213 2.634 2.97 4.376 1.757 1.743 3.684 2.738 4.354 2.88.345.073.535-.038 1.198-.541.096-.073.193-.147.296-.222.685-.507 1.226-.865 1.945-.865h.004c.625 0 1.16.27 2.048.714 1.157.58 3.8 2.146 4.96 3.308.563.565.877.925 1.031 1.33.232.608.014 1.086-.128 1.405l-.078.176c-.27.637-.6 1.248-.983 1.825-.684 1.016-1.376 1.803-2.532 2.337-.593.28-1.243.42-1.9.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector2Icon;
/* prettier-ignore-end */
