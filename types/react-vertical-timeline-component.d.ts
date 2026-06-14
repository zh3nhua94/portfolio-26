declare module "react-vertical-timeline-component" {
  import type { CSSProperties, ReactNode } from "react";

  export type VerticalTimelineProps = {
    animate?: boolean;
    className?: string;
    layout?: "1-column" | "2-columns";
    lineColor?: string;
    children?: ReactNode;
  };

  export type VerticalTimelineElementProps = {
    className?: string;
    contentStyle?: CSSProperties;
    contentArrowStyle?: CSSProperties;
    date?: ReactNode;
    dateClassName?: string;
    iconStyle?: CSSProperties;
    icon?: ReactNode;
    position?: "left" | "right";
    style?: CSSProperties;
    textClassName?: string;
    children?: ReactNode;
  };

  export function VerticalTimeline(props: VerticalTimelineProps): ReactNode;
  export function VerticalTimelineElement(props: VerticalTimelineElementProps): ReactNode;
}
