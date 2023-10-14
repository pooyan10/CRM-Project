import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = (e, index) => {
    const { value, name } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;

    setForm({ ...form, products: newProducts });
  };
  const deleteHandler = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setForm({ ...form, products: newProducts });
  };

  return (
    <div className="p-2 relative">
      <p className="font-bold">Purchased Products</p>
      {products.map((product, index) => (
        <div key={index}>
          <FormInput
            name="name"
            label="Product Name"
            value={product.name}
            type="text"
            onChange={(e) => changeHandler(e, index)}
          />
          <div className="flex justify-between">
            <FormInput
              name="price"
              label="Price"
              value={product.price}
              type="text"
              onChange={(e) => changeHandler(e, index)}
            />
            <FormInput
              name="qty"
              label="Qty"
              value={product.qty}
              type="number"
              onChange={(e) => changeHandler(e, index)}
            />
          </div>
          <button
            className="w-full border-2 rounded-md my-3 bg-red-300 border-red-700"
            onClick={() => deleteHandler(index)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        className="absolute top-0 text-green-800 text-center align-middle right-0 my-1.5 mr-2 border-2 rounded-md px-2 bg-green-300 border-green-700"
        onClick={addHandler}
      >
        +
      </button>
    </div>
  );
}

export default ItemList;
