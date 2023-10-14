import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function CustomerDetailsPage({ data }) {
  console.log(data);
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${data._id}`, {
      method: "DELETE",
    });
    const newRes = await res.json();
    if (newRes.status === "success") {
      router.push("/");
    }
  };
  return (
    <div className="border-2 p-6">
      <h4 className="mb-4 mt-6 font-bold">Customer`s Details </h4>
      <div className="border-t-2 grid grid-cols-3 overflow-hidden shadow-xl p-5 space-y-5 items-center">
        <div className="flex">
          <span className="text-blue-600">Name: </span>
          <p className="pl-1">{data.name}</p>
        </div>
        <div className="flex">
          <span className="text-blue-600">lastName: </span>
          <p className="pl-1">{data.lastName}</p>
        </div>
        <div className="flex ">
          <span className="text-blue-600">email: </span>
          <p className="pl-1 ">{data.email}</p>
        </div>
        <div className="flex">
          <span className="text-blue-600">phone: </span>
          <p className="pl-1">{data.phone}</p>
        </div>
        <div className="flex">
          <span className="text-blue-600">address: </span>
          <p className="pl-1">{data.address}</p>
        </div>
        <div className="flex">
          <span className="text-blue-600">postal code: </span>
          <p className="pl-1">{data.postalCode}</p>
        </div>
        <div className="flex">
          <span className="text-blue-600">Date: </span>
          <p className="pl-1">{moment(data.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 p-5 border-t-2 mt-8 shadow-xl ">
        <p className="">Name</p>
        <p className="">Price</p>
        <p className="">Qty</p>
        {data.products.map((product, index) => (
          <React.Fragment key={index}>
            <p className="">{product.name}</p>
            <p className="">{product.price}</p>
            <p className="">{product.qty}</p>
          </React.Fragment>
        ))}
      </div>
      <div className="flex mt-8 items-center mb-3 shadow-xl p-3 justify-between border-t-2 ">
        <p className="">Edit or Delete</p>
        <button
          className="border-2 border-red-700 bg-red-300 rounded-sm p-1"
          onClick={deleteHandler}
        >
          Delete
        </button>
        <Link
          href={`/edit/${data._id}`}
          className="border-2 border-yellow-700 bg-yellow-300 rounded-sm p-1"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default CustomerDetailsPage;
