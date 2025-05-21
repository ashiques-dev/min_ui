import { JSX } from "react";

export type TCopyButton = {
  copied: boolean;
  onClick: () => Promise<void>;
  className?: string;
};
export type TCode = {
  code: string;
  language: string;
  highlightLines?: number[];
  showLineNumbers?: boolean;
  name?: string;
};

export type TCodeBlock = { className?: string } & TCode;
export type TCodeBlockWithTitle = {
  className?: string;
  codeBlockClassName?: string;
  tabs: TCode[];
};

export type TCodeBlockWithComponent = {
  component: JSX.Element;
  codeBlockWithTitleClassName?: string;
} & TCodeBlockWithTitle;

export type TNextJsDarkModeList = {
  tabs: TCode[];
  title: string;
  component?: JSX.Element;
};
