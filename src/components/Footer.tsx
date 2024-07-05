import IconBxsLeftArrow from "../assets/icons/IconBxsLeftArrow";
import IconBxsRightArrow from "../assets/icons/IconBxsRightArrow";
import { AvailablePages, lastPage } from "../interfaces/Pages.interface";
import "../styles/components/Footer.sass";

type FooterProps = {
  page: AvailablePages;
  setPage: (page: AvailablePages) => void;
  title: string;
};

export default function Footer({ page, setPage, title }: FooterProps) {
  const handlePageChange = (direction: "increment" | "decrement") => {
    if (direction === "increment") {
      const nextPage = page + 1 <= lastPage ? page + 1 : lastPage;
      setPage(nextPage as AvailablePages);
    } else if (direction === "decrement") {
      const prevPage = page - 1 >= 0 ? page - 1 : 0;
      setPage(prevPage as AvailablePages);
    }
  };
  return (
    <footer className="footer-content">
      <IconBxsLeftArrow
        className={`footer-icon ${page === 0 ? "disabled" : "able"}`}
        onClick={() => handlePageChange("decrement")}
      />
      <h3 className="footer-title">{title}</h3>
      <IconBxsRightArrow
        className={`footer-icon ${page === lastPage ? "disabled" : "able"}`}
        onClick={() => handlePageChange("increment")}
      />
    </footer>
  );
}
