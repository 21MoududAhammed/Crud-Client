import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */

export default function Card({ book, onRemove }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/update/${book?._id}`);
  };

  const handleDelete = async (_id) => {
    try {
      const res = await fetch(`https://books-store-server.vercel.app/api/v1/book/${_id}`, {
        method: "DELETE",
      });
      const result = await res.json();
      
      if (result.status === 'success') {
        alert(result?.message);
        onRemove(_id);
      }
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 font-serif flex justify-between items-center p-4">
      <div>
        <h3 className="text-3xl font-bold ">{book?.bookName}</h3>
        <h5 className="text-2xl">
          Author: <span>{book?.author}</span>
        </h5>
        <h6 className="text-xl">
          Book Id: <span>{book?.id}</span>
        </h6>
        <h6 className="text-xl">
          Quantity: <span>{book?.quantity}</span>
        </h6>
      </div>
      <div className="flex flex-col gap-6">
        <button
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          onClick={handleEdit}
        >
          Edit
        </button>

        <button
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          onClick={() => handleDelete(book?._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
