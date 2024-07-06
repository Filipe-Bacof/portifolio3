import { ReactNode } from "react";
import Tooltip from "./Tooltip";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  text: string;
  side?: "left" | "top" | "right" | "bottom";
};

export default function ButtonLink({
  text,
  href,
  children,
  side,
}: ButtonLinkProps) {
  return (
    <Tooltip text={text} side={side}>
      <a href={href} target="_blank" className="button-studying">
        {children}
      </a>
    </Tooltip>
  );
}
