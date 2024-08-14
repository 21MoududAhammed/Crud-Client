import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const initialValue = {
    bookName: "",
    author: "",
    id: "",
    quantity: "",
  };
  const [bookDetails, setBookDetails] = useState(initialValue);
  //  to update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookDetails),
      });

      const data = await res.json();
      if (data.success) {
        navigate("/display");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
      alert(err?.message);
    }
  };

  //   fetch the targeted book details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/books/${id}`);
        if (res.status === 200) {
          const data = await res.json();
          const { _id, ...bookInfo } = data;
          setBookDetails(bookInfo);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  return (
    <section>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Update A Book Details
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="bookName"
              >
                BookName
              </label>
              <input
                id="bookName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
                value={bookDetails.bookName}
                onChange={(e) =>
                  setBookDetails({ ...bookDetails, bookName: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="author"
              >
                Author
              </label>
              <input
                id="author"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
                value={bookDetails.author}
                onChange={(e) =>
                  setBookDetails({ ...bookDetails, author: e.target.value })
                }
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="id">
                Book Id
              </label>
              <input
                id="id"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
                value={bookDetails.id}
                onChange={(e) =>
                  setBookDetails({ ...bookDetails, id: e.target.value })
                }
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="quantity"
              >
                Quantity
              </label>
              <input
                id="quantity"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
                value={bookDetails.quantity}
                onChange={(e) =>
                  setBookDetails({ ...bookDetails, quantity: e.target.value })
                }
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Update
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}
