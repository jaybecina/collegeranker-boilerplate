import { RouteProps } from "react-router-dom";

export interface ICSSProperties {
  textAlign?: "center" | "left" | "right" | "justify" | "start" | "end";
  color?: string;
  height?: number | string;
  paddingInline?: number | string;
  lineHeight?: number | string;
  backgroundColor?: string;
  minHeight?: number | string;
  overflow?: "hidden" | "visible" | "scroll" | "auto" | string;
  borderRadius?: number | string;
  width?: number | string;
  maxWidth?: number | string;
}
