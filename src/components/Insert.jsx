import { useForm } from "react-hook-form";

export default function Insert() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`https://books-store-server.vercel.app/api/v1/book`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 201) {
        alert("Data has been inserted successfully.");
        reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Insert A Book Details
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="bookName">
                Book Name
              </label>
              <input
                id="bookName"
                type="text"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  errors.bookName ? "border-red-500" : "border-gray-200"
                } rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring`}
                {...register("bookName", { required: "Book name is required" })}
              />
              {errors.bookName && <p className="text-red-500">{errors.bookName.message}</p>}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="author">
                Author
              </label>
              <input
                id="author"
                type="text"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  errors.author ? "border-red-500" : "border-gray-200"
                } rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring`}
                {...register("author", { required: "Author is required" })}
              />
              {errors.author && <p className="text-red-500">{errors.author.message}</p>}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="id">
                Book ID
              </label>
              <input
                id="id"
                type="text"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  errors.id ? "border-red-500" : "border-gray-200"
                } rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring`}
                {...register("id", {
                  required: "Book ID is required",
                  validate: {
                    positiveNumber: (value) =>
                      parseFloat(value) > 0 || "Book ID must be a positive number",
                    isInteger: (value) =>
                      Number.isInteger(parseFloat(value)) || "Book ID must be an integer",
                  },
                })}
              />
              {errors.id && <p className="text-red-500">{errors.id.message}</p>}
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200" htmlFor="quantity">
                Quantity
              </label>
              <input
                id="quantity"
                type="text"
                className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border ${
                  errors.quantity ? "border-red-500" : "border-gray-200"
                } rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring`}
                {...register("quantity", {
                  required: "Quantity is required",
                  validate: {
                    positiveNumber: (value) =>
                      parseFloat(value) > 0 || "Quantity must be a positive number",
                    isInteger: (value) =>
                      Number.isInteger(parseFloat(value)) || "Quantity must be an integer",
                  },
                })}
              />
              {errors.quantity && <p className="text-red-500">{errors.quantity.message}</p>}
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
