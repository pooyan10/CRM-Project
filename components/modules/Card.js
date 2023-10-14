import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Card({ customer }) {
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${customer._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.status === "success") {
      router.reload();
    }
  };

  return (
    <div className="border border-gray-200 flex px-2 flex-col sm:flex-row sm:justify-between shadow-lg m-2">
      <div className="flex flex-col sm:flex-row sm:items-center pl-1">
        <p className="mr-8">
          {customer.name} {customer.lastName}
        </p>
        <p className="">{customer.email}</p>
      </div>

      <div className="flex flex-col sm:flex-row items-center m-2 space-x-2 ">
        <button
          className="border-2 border-red-400  w-full text-red-800 rounded-md sm:w-20  py-1 "
          onClick={deleteHandler}
        >
          Delete
        </button>
        <Link
          className="border-2 w-full sm:w-20 mt-1 sm:mt-0 text-center py-1 rounded-md border-yellow-400 text-yellow-700 "
          href={`/edit/${customer._id}`}
        >
          Edit
        </Link>
        <Link
          className="border-2  w-full sm:mt-0 sm:w-20 mt-1 text-center py-1 rounded-md border-blue-400 text-blue-700"
          href={`/customer/${customer._id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
