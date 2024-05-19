import React, { useState, useEffect } from "react";
import ModalPortal from "./ModalPortal";
import styles from "../styles/AddBookModal.module.css";

const AddBookModal = ({ addBook, onClose, open }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => {
    setSlug(title.toLowerCase().replace(/\s+/g, "-"));
  }, [title]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook({ title, author, slug });
      onClose();
    }
  };

  return (
    <ModalPortal open={open}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2>Додати нову книгу</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.row_in_modal}>
              <label>Назва </label>
              <input
                className={styles.input_in_modal}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className={styles.row_in_modal}>
              <label>Автор </label>
              <input
                className={styles.input_in_modal}
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>
            <div className={styles.row_in_modal}>
              <label>Slug </label>
              <input
                className={styles.input_in_modal}
                type="text"
                value={slug}
                readOnly
              />
            </div>
            <div className={styles.row_in_modal}>
              <button type="submit">Додати</button>
              <button type="button" onClick={onClose}>
                Закрити
              </button>
            </div>
          </form>
        </div>
      </div>
    </ModalPortal>
  );
};

export default AddBookModal;
