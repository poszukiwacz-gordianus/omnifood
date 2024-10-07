export default function SectionDefault({
  children,
  className = "",
  id = null,
}) {
  return (
    <section id={id} className={`py-14 xl:py-24 ${className}`}>
      {children}
    </section>
  );
}
