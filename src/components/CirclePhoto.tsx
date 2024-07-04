import "../styles/components/CirclePhoto.sass";

type CirclePhotoProps = {
  href: string;
  src: string;
  alt: string;
  small?: boolean;
};

export default function CirclePhoto({
  href,
  src,
  alt,
  small,
}: CirclePhotoProps) {
  return (
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
  );
}
