const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full p-2 border border-gray-300 rounded bg-white"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
