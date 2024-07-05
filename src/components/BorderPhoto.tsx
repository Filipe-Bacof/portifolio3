import { forwardRef } from "react";
import "../styles/components/BorderPhoto.sass";
import Tooltip from "./Tooltip";

type BorderPhotoProps = {
  src: string;
  alt: string;
  text: string;
  small?: boolean;
  xsmall?: boolean;
  classes?: string;
  side?: "left" | "top" | "right" | "bottom";
};

const BorderPhoto = forwardRef<HTMLDivElement, BorderPhotoProps>(
  ({ src, alt, small, xsmall, classes, text, side }, ref) => {
    return (
      <div
        ref={ref}
        className={`border-photo-gradient ${classes} ${small ? "small" : ""}  ${
          xsmall ? "xsmall" : ""
        }`}
      >
        <Tooltip text={text} side={side}>
          <img className="image" src={src} alt={alt} width="95%" height="95%" />
        </Tooltip>
      </div>
    );
  }
);

export default BorderPhoto;
