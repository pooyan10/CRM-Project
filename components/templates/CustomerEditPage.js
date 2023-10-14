import React, { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";
import moment from "moment";

function CustomerEditPage({ data, id }) {
  const date = data.date ? moment(data.date).utc().format("YYYY-MM-DD") : " ";
  const [form, setForm] = useState({
    name: data.name,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone || "",
    address: data.address || "",
    postalCode: data.postalCode || "",
    products: data.products || "",
    date: date,
  });

  const router = useRouter();

  const cancelHandler = () => {
    router.push("/");
  };

  const editHandler = async () => {
    const res = await fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") router.push("/");
  };

  return (
    <div>
      <h4 className="">Edit Customer</h4>
      <Form form={form} setForm={setForm} />
      <div className="flex justify-between mx-5">
        <button
          className="border-2 p-2 rounded-md bg-red-200 border-red-700 text-red-800"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button
          className="border-2 p-2 rounded-md bg-blue-300 border-blue-700 text-blue-800"
          onClick={editHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default CustomerEditPage;
