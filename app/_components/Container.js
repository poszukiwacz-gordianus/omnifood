export default function Container({ children }) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 lg:px-20">
      {children}
    </div>
  );
}
