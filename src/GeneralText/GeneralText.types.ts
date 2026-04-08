import Constant from "../Constant/Constant";

export type TextType =
  (typeof Constant.TYPE)[keyof typeof Constant.TYPE];

export type TextColor =
  (typeof Constant.COLOR)[keyof typeof Constant.COLOR];

export interface Props {
  type?: TextType;
  text?: React.ReactNode;
  color?: TextColor;
};
