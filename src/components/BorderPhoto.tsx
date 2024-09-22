import "../styles/components/BorderPhoto.sass";
import Tooltip from "./Tooltip";

export type BorderPhotoProps = {
  src: string;
  alt: string;
  text?: string;
  small?: boolean;
  xsmall?: boolean;
  classes?: string;
  href?: string;
  side?: "left" | "top" | "right" | "bottom";
};

export function BorderPhoto({
  src,
  alt,
  small,
  xsmall,
  classes,
  text,
  href,
  side,
}: BorderPhotoProps) {
  const Comp = href ? "a" : "div";

  const combinedClasses = `border-photo-gradient ${small ? "small" : ""} ${
    xsmall ? "xsmall" : ""
  } ${classes}`;
  const imageClasses = `image ${small ? "small" : ""} ${
    xsmall ? "xsmall" : ""
  }`;

  return (
    <Comp href={href} className={combinedClasses}>
      {text ? (
        <Tooltip text={text} side={side}>
          <img className={imageClasses} src={src} alt={alt} />
        </Tooltip>
      ) : (
        <img className={imageClasses} src={src} alt={alt} />
      )}
    </Comp>
  );
}
