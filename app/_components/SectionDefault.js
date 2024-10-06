export default function SectionDefault({ children, className = "" }) {
  return (
    <section className={`py-6 sm:py-12 lg:py-24 ${className}`}>
      {children}
    </section>
  );
}
