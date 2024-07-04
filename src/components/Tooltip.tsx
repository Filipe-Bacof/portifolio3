import { ReactNode } from "react";
import * as TooltipRadix from "@radix-ui/react-tooltip";
import "../styles/components/Tooltip.sass";

type TooltipProps = {
  children: ReactNode;
  text: string;
  side?: "left" | "top" | "right" | "bottom";
};

export default function Tooltip({ children, text, side }: TooltipProps) {
  return (
    <TooltipRadix.Provider delayDuration={300}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipRadix.Content
            className="tooltip-content"
            side={side || "right"}
          >
            <TooltipRadix.Arrow className="tooltip-arrow" />
            {text}
          </TooltipRadix.Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
}
