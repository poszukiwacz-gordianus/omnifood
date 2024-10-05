export default function SectionHeader({
  header,
  subHeader,
  headerClassName,
  subHeaderClassName,
}) {
  return (
    <header>
      {subHeader ? (
        <span
          className={`mb-4 block text-lg font-medium uppercase tracking-wide text-primary-600 ${subHeaderClassName}`}
        >
          {subHeader}
        </span>
      ) : null}

      {header ? (
        <h2
          className={`mb-24 text-5xl font-bold leading-none text-accent-500 ${headerClassName}`}
        >
          {header}
        </h2>
      ) : null}
    </header>
  );
}
