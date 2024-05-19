import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import AddBookModal from "./components/AddBookModal";
import FilterSort from "./components/FilterSort";
import styles from "./styles/App.module.css";
import UserList from "./components/UserList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const initialBooks = [
      { id: 1, title: "Володар перстнів", author: "Толкін" },
      { id: 2, title: "Гаррі Поттер", author: "Дж. Роулінг" },
    ];
    setBooks(initialBooks);
  }, []);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books
    .filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  return (
    <div className={styles.app}>
      <h1>Бібліотека</h1>
      <button onClick={() => setIsModalOpen(true)}>Додати книгу</button>
      <FilterSort
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <BookList books={filteredBooks} deleteBook={deleteBook} />
      {isModalOpen && (
        <AddBookModal
          addBook={addBook}
          onClose={() => setIsModalOpen(false)}
          open={isModalOpen}
        />
      )}
      <UserList />
    </div>
  );
};

export default App;
