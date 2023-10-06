import React from "react";
import cl from "./index.module.scss";
import Button from "../Button";
import { getPagesArray } from "../../utils/pages";

const Pagination = ({ totalPages, setPage, page }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <ul className={cl.Pagination}>
      {pagesArray.map((el) => (
        <li
          key={el}
          className={el === page ? cl.wrapperCurrentButton : cl.wrapperButton}
        >
          <Button onClick={() => setPage(el)}>{el}</Button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
