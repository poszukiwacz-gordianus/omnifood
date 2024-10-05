export default function CallToActionForm({
  formContent: {
    fullName,
    fullNamePlaceholder,
    email,
    emailPlaceholder,
    select,
    options,
    button,
  },
}) {
  return (
    <form className="grid grid-cols-2 gap-x-8 gap-y-6" action="#">
      <div>
        <label for="fullName" className="mb-3 block text-base font-semibold">
          {fullName}
        </label>
        <input
          type="text"
          id="fullName"
          placeholder={fullNamePlaceholder}
          required
          className="w-full rounded-md bg-primary-50 p-3 text-lg shadow-sm placeholder:text-accent-200 focus:shadow-[0_0_0_0.5rem_rgba(252,246,232,0.5)] focus:outline-none focus:ring-0"
        />
      </div>

      <div>
        <label for="email" className="mb-3 block text-base font-semibold">
          {email}
        </label>
        <input
          type="email"
          id="email"
          placeholder={emailPlaceholder}
          required
          className="w-full rounded-md bg-primary-50 p-3 text-lg shadow-sm placeholder:text-accent-200 focus:shadow-[0_0_0_0.5rem_rgba(252,246,232,0.5)] focus:outline-none focus:ring-0"
        />
      </div>

      <div>
        <label for="select" className="mb-3 block text-base font-semibold">
          {select}
        </label>
        <select
          id="select"
          required
          className="w-full rounded-md bg-primary-50 p-3 text-lg shadow-sm focus:shadow-[0_0_0_0.5rem_rgba(252,246,232,0.5)] focus:outline-none focus:ring-0"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.option}
            </option>
          ))}
        </select>
      </div>

      <button className="inline-block self-end rounded-lg bg-primary-900 py-[0.60rem] text-xl font-semibold text-primary-100 transition-all duration-300 hover:bg-primary-100 hover:text-primary-900 focus:shadow-[0_0_0_0.5rem_rgba(252,246,232,0.5)] focus:outline-none focus:ring-0">
        {button}
      </button>
    </form>
  );
}
