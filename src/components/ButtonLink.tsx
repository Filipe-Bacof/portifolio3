import type { ReactNode } from "react";
import Tooltip from "./Tooltip";
import "../styles/components/CurrentlyStudying.sass";

export type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  text: string;
  side?: "left" | "top" | "right" | "bottom";
};

export function ButtonLink({ text, href, children, side }: ButtonLinkProps) {
  return (
    <Tooltip text={text} side={side}>
      <a
        href={href}
        target="_blank"
        className="button-studying"
        rel="noreferrer"
      >
        {children}
      </a>
    </Tooltip>
  );
}
