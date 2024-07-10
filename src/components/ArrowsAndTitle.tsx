import { ReactNode } from "react";
import IconBxsLeftArrow from "../assets/icons/IconBxsLeftArrow";
import IconBxsRightArrow from "../assets/icons/IconBxsRightArrow";
import "../styles/components/ArrowsAndTitle.sass";

type ArrowsAndTitleProps = {
  action: (type: "decrement" | "increment") => void;
  children: ReactNode;
  selected: number;
  lenght: number;
};
export default function ArrowsAndTitle({
  action,
  children,
  selected,
  lenght,
}: ArrowsAndTitleProps) {
  return (
    <div className="arrows-and-title-content">
      <IconBxsLeftArrow
        className={`arrows-and-title-icon ${
          selected === 0 ? "disabled" : "able"
        }`}
        onClick={() => action("decrement")}
      />
      <div className="title">{children}</div>
      <IconBxsRightArrow
        className={`arrows-and-title-icon ${
          selected === lenght - 1 ? "disabled" : "able"
        }`}
        onClick={() => action("increment")}
      />
    </div>
  );
}
