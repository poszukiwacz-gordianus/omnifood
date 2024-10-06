export default function SectionHeader({
  header,
  subHeader,
  headerClassName = "",
}) {
  return (
    <header>
      {subHeader ? (
        <span
          className={`mb-1 block text-xs font-medium uppercase text-primary-600 sm:text-sm lg:mb-4 lg:text-base`}
        >
          {subHeader}
        </span>
      ) : null}

      {header ? (
        <h2
          className={`mb-10 text-xl font-bold text-secondary-700 sm:text-3xl md:text-3xl lg:text-4xl ${headerClassName}`}
        >
          {header}
        </h2>
      ) : null}
    </header>
  );
}
