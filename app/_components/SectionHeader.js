export default function SectionHeader({ header, subHeader }) {
  return (
    <>
      <span className="mb-4 block text-lg font-medium uppercase tracking-wide text-primary-600">
        {subHeader}
      </span>
      <h2 className="mb-24 text-5xl font-bold leading-none text-accent-500">
        {header}
      </h2>
    </>
  );
}
