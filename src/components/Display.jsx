import Card from "./Card";
import { useEffect, useState } from "react";

export default function Display() {
  const [books, setBooks] = useState([]);
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
        books.map((book) => <Card key={book._id} book={book} />)
      ) : (
        <div>Empty</div>
      )}
    </section>
  );
}
