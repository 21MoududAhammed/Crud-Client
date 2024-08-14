import Card from "./Card";
import { useEffect, useState } from "react";

export default function Display() {
  const [books, setBooks] = useState([]);

//   Instantly, remove a book from ui after deleting 
  const handleRemove = (id) => {
    const nextBooks = books.filter((book) => book._id !== id);
    setBooks(nextBooks);
  };

//   load data with first render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/books`);
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 gap-5 mx-3">
      {books?.length > 0 ? (
        books.map((book) => (
          <Card key={book._id} book={book} onRemove={handleRemove} />
        ))
      ) : (
        <div>Empty</div>
      )}
    </section>
  );
}
