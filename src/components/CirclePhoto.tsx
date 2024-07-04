import "../styles/components/CirclePhoto.sass";

type CirclePhotoProps = {
  href: string;
  src: string;
  alt: string;
};

export default function CirclePhoto({ href, src, alt }: CirclePhotoProps) {
  return (
    <a
      className="profile-pic-container"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className="border-gradient">
        <img
          className="profile-pic"
          src={src}
          alt={alt}
          width={160}
          height={160}
        />
      </div>
    </a>
  );
}
