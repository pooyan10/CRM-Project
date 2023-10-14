function FormInput({ name, value, label, type, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="text-blue-600">
        {label}
      </label>
      <input
        type={type}
        value={value}
        id={name}
        name={name}
        onChange={onChange}
        className="border-2 w-full bg-gray-200 rounded-md focus:"
      />
    </div>
  );
}

export default FormInput;
