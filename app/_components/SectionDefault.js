export default function SectionDefault({
  children,
  className = "",
  id = null,
}) {
  return (
    <section id={id} className={`py-6 sm:py-12 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}
