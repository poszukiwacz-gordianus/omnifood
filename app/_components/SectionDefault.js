export default function SectionDefault({ children, className }) {
  return (
    <section className={`mx-auto max-w-screen-lg px-2 py-24 ${className}`}>
      {children}
    </section>
  );
}
