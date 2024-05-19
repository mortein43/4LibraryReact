import React from "react";
import styles from "../styles/BookItem.module.css";

const BookItem = ({ book, deleteBook }) => (
  <div>
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <button
      className={styles.button_delete}
      onClick={() => deleteBook(book.id)}
    >
      Видалити
    </button>
  </div>
);

export default BookItem;
