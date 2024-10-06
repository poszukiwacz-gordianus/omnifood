import FormElements from "./FormElements";

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
    <form
      className="grid gap-4 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-6"
      action="#"
    >
      <FormElements>
        <FormElements.Label htmlFor="fullName" label={fullName} />
        <FormElements.Input
          type="text"
          id="fullName"
          placeholder={fullNamePlaceholder}
          aria-label="Full Name"
        />
      </FormElements>

      <FormElements>
        <FormElements.Label htmlFor="email" label={email} />
        <FormElements.Input
          type="email"
          id="email"
          placeholder={emailPlaceholder}
          aria-label="Email Address"
        />
      </FormElements>

      <FormElements>
        <FormElements.Label htmlFor="select" label={select} />
        <FormElements.Select
          id="select"
          array={options}
          aria-label="Select Option"
        />
      </FormElements>

      <button
        className="inline-block self-end rounded-xl bg-primary-900 py-3 text-base font-medium text-primary-100 transition-all duration-700 hover:bg-primary-100 hover:text-primary-900 focus:shadow-[0_0_0_0.5rem_rgba(252,246,232,0.5)] focus:outline-none focus:ring-0 md:py-[0.60rem] md:font-semibold lg:text-xl"
        aria-label="Submit form"
      >
        {button}
      </button>
    </form>
  );
}
