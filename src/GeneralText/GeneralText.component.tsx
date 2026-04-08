import * as React from "react";

import Constant from "../Constant/Constant";
import styles from "./GeneralText.component.styles";
import type { Props, TextType } from "./GeneralText.types";

const { TYPE, EMPTY_STRING } = Constant;

const TAG_MAP: Record<TextType, keyof React.JSX.IntrinsicElements> = {
  [TYPE.PRIMARY]: "h1",
  [TYPE.SECONDARY]: "h2",
  [TYPE.TEXT]: "p",
  [TYPE.DETAIL_TEXT]: "p",
  [TYPE.CUSTOM_TEXT]: "span",
};

/**
 * General Text
 *
 * @param {Props} props - props
 * @returns {React.ReactElement} GeneralText
 */
const GeneralText = ({ type = TYPE.TEXT, color, text = EMPTY_STRING }: Props): React.ReactElement => {
  const tag = TAG_MAP[type];
  const computedStyle: React.CSSProperties = {
    ...styles.base,
    ...styles.variants[type],
    ...(color ? { color } : {}),
  };

  return React.createElement(tag, { style: computedStyle }, text);
};

export default GeneralText;
