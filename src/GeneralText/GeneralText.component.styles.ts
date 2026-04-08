import type { CSSProperties } from "react";

import Constant from "../Constant/Constant";

type TextType =
  (typeof Constant.TYPE)[keyof typeof Constant.TYPE];

const variants: Record<TextType, CSSProperties> = {
  PRIMARY: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: 1.2,
  },
  SECONDARY: {
    fontSize: "24px",
    fontWeight: 600,
    lineHeight: 1.3,
  },
  TEXT: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.6,
  },
  DETAIL_TEXT: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  CUSTOM_TEXT: {
    fontSize: "14px",
    fontWeight: 400,
  },
};

const styles = {
  base: {
    margin: 0,
    padding: 0,
    fontFamily: "inherit",
  } as CSSProperties,

  variants,
};

export default styles;