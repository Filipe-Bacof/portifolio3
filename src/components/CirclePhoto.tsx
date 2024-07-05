import "../styles/components/CirclePhoto.sass";

type CirclePhotoProps = {
  src: string;
  alt: string;
  href?: string;
  small?: boolean;
  xsmall?: boolean;
};

export default function CirclePhoto({
  href,
  src,
  alt,
  small,
  xsmall,
}: CirclePhotoProps) {
  return href ? (
    <a
      className={`profile-pic-container ${small ? "small" : ""} ${
        xsmall ? "xsmall" : ""
      }`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div
        className={`border-gradient ${small ? "small" : ""} ${
          xsmall ? "xsmall" : ""
        }`}
      >
        <img
          className="profile-pic"
          src={src}
          alt={alt}
          width="95%"
          height="95%"
        />
      </div>
    </a>
  ) : (
    <div
      className={`profile-pic-container ${small ? "small" : ""}  ${
        xsmall ? "xsmall" : ""
      } default-cursor`}
      rel="noreferrer"
    >
      <div
        className={`border-gradient ${small ? "small" : ""}  ${
          xsmall ? "xsmall" : ""
        }`}
      >
        <img
          className="profile-pic"
          src={src}
          alt={alt}
          width="95%"
          height="95%"
        />
      </div>
    </div>
  );
}
