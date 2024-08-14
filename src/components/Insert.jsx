import { useState } from "react";

export default function Insert() {
  const [bookDetails, setBookDetails] = useState({
    bookName: "",
    author: "",
    id: "",
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookDetails);
  };

  return (
    <section>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Insert A Book Details
        </h2>
        <form onSubmit={handleSubmit}>
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
                value={bookDetails.BookName}
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
              Insert
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}
