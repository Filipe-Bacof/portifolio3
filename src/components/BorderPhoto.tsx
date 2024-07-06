import { forwardRef, useImperativeHandle, useRef } from "react";
import "../styles/components/BorderPhoto.sass";
import Tooltip from "./Tooltip";

type BorderPhotoProps = {
  src: string;
  alt: string;
  text?: string;
  small?: boolean;
  xsmall?: boolean;
  classes?: string;
  href?: string;
  side?: "left" | "top" | "right" | "bottom";
};

const BorderPhoto = forwardRef<
  HTMLDivElement | HTMLAnchorElement,
  BorderPhotoProps
>(({ src, alt, small, xsmall, classes, text, href, side }, ref) => {
  const localRef = useRef<HTMLDivElement | HTMLAnchorElement>(null);

  useImperativeHandle(
    ref,
    () => localRef.current as HTMLDivElement | HTMLAnchorElement
  );

  const combinedClasses = `border-photo-gradient ${classes} ${
    small ? "small" : ""
  } ${xsmall ? "xsmall" : ""}`;
  const imageClasses = `image ${small ? "small" : ""} ${
    xsmall ? "xsmall" : ""
  }`;

  return href ? (
    <a
      ref={localRef as React.RefObject<HTMLAnchorElement>}
      href={href}
      className={combinedClasses}
    >
      {text ? (
        <Tooltip text={text} side={side}>
          <img
            className={imageClasses}
            src={src}
            alt={alt}
            width="95%"
            height="95%"
          />
        </Tooltip>
      ) : (
        <img
          className={imageClasses}
          src={src}
          alt={alt}
          width="95%"
          height="95%"
        />
      )}
    </a>
  ) : (
    <div
      ref={localRef as React.RefObject<HTMLDivElement>}
      className={combinedClasses}
    >
      {text ? (
        <Tooltip text={text} side={side}>
          <img
            className={imageClasses}
            src={src}
            alt={alt}
            width="95%"
            height="95%"
          />
        </Tooltip>
      ) : (
        <img
          className={imageClasses}
          src={src}
          alt={alt}
          width="95%"
          height="95%"
        />
      )}
    </div>
  );
});

export default BorderPhoto;
