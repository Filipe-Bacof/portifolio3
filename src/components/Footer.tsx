import { useEffect } from "react";
import IconBxsLeftArrow from "../assets/icons/IconBxsLeftArrow";
import IconBxsRightArrow from "../assets/icons/IconBxsRightArrow";
import { AvailablePages, lastPage } from "../interfaces/Pages.interface";
import "../styles/components/Footer.sass";
import ArrowsAndTitle from "./ArrowsAndTitle";

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handlePageChange("increment");
      } else if (event.key === "ArrowLeft") {
        handlePageChange("decrement");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [page]);

  return (
    <footer className="footer-content">
      <ArrowsAndTitle
        action={handlePageChange}
        lenght={lastPage + 1}
        selected={page}
      >
        <h3 className="footer-title">{title}</h3>
      </ArrowsAndTitle>
    </footer>
  );
}
