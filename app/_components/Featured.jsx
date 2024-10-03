export default function Featured() {
  const { featuredIn } = featuredContent;
  return (
    <section>
      <div className="mx-auto max-w-[1200px] px-8">
        <h2 className="">{featuredIn}</h2>
        <div></div>
      </div>
    </section>
  );
}

export const featuredContent = {
  featuredIn: "As featured in",
  image: featuredImages,
};

const featuredImages = importAll(
  require.context("@/public/img/customers", false, /\.(png|jpe?g|svg)$/),
);
