import { type ReactNode, forwardRef } from "react";
import * as TooltipRadix from "@radix-ui/react-tooltip";
import "../styles/components/Tooltip.sass";

type TooltipProps = {
  children: ReactNode;
  text: string;
  side?: "left" | "top" | "right" | "bottom";
};

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, text, side }, ref) => (
    <TooltipRadix.Provider delayDuration={300}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>
          <div ref={ref}>{children}</div>
        </TooltipRadix.Trigger>
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
  )
);

export default Tooltip;
