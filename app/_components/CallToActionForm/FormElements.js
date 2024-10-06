function FormElements({ children }) {
  return <div>{children}</div>;
}

function Label({ htmlFor, label }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1 block text-sm font-medium md:mb-3 lg:text-base"
    >
      {label}
    </label>
  );
}

function Input({ type, id, placeholder }) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      required
      className="w-full rounded-xl bg-primary-50 p-2 text-sm shadow-sm placeholder:text-accent-200 focus:shadow-[0_0_0_0.5rem_rgba(252,246,232,0.5)] focus:outline-none focus:ring-0 lg:p-3 lg:text-lg"
    />
  );
}

function Select({ id, array }) {
  return (
    <select
      id={id}
      required
      className="w-full rounded-xl bg-primary-50 p-2 text-sm shadow-sm focus:shadow-[0_0_0_0.5rem_rgba(252,246,232,0.5)] focus:outline-none focus:ring-0 lg:p-3 lg:text-lg"
    >
      {array.map((item) => (
        <option key={item.value} value={item.value}>
          {item.option}
        </option>
      ))}
    </select>
  );
}

FormElements.Label = Label;
FormElements.Input = Input;
FormElements.Select = Select;

export default FormElements;
