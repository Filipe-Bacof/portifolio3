import "../styles/components/CirclePhoto.sass";

type CirclePhotoProps = {
  src: string;
  alt: string;
  href?: string;
  small?: boolean;
};

export default function CirclePhoto({
  href,
  src,
  alt,
  small,
}: CirclePhotoProps) {
  return href ? (
    <a
      className={`profile-pic-container ${small ? "small" : ""}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className={`border-gradient ${small ? "small" : ""}`}>
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
      className={`profile-pic-container ${small ? "small" : ""} default-cursor`}
      rel="noreferrer"
    >
      <div className={`border-gradient ${small ? "small" : ""}`}>
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
