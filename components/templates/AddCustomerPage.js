import React, { useState } from "react";
import Form from "../modules/Form";
import { useRouter } from "next/router";

function AddCustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });

  const router = useRouter();

  const cancelHandler = () => {
    setForm({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postalCode: "",
      date: "",
      products: [],
    });
    router.push("/");
  };

  const saveHandler = async () => {
    const res = await fetch("/api/customer", {
      method: "POST",
      body: JSON.stringify({ data: form }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") router.push("/");
  };

  return (
    <div>
      <h2 className="font-bold mt-12">Add New Customer</h2>
      <Form form={form} setForm={setForm} />
      <div className="flex justify-between">
        <button
          className="border-2 border-red-600 text-red-600 rounded-md px-3 py-1"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button
          className="border-2 border-green-600 text-green-600 rounded-md px-4 py-1"
          onClick={saveHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AddCustomerPage;
