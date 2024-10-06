export default function SectionHeader({
  header,
  subHeader,
  headerClassName = "",
}) {
  return (
    <header>
      {subHeader ? (
        <span
          className={`mb-1 block text-sm font-medium uppercase text-primary-600 lg:mb-4 lg:text-base`}
        >
          {subHeader}
        </span>
      ) : null}

      {header ? (
        <h2
          className={`mb-10 text-3xl font-bold text-secondary-700 md:text-3xl lg:text-4xl ${headerClassName}`}
        >
          {header}
        </h2>
      ) : null}
    </header>
  );
}
