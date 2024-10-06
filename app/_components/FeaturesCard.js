export default function FeaturesCard({ features }) {
  return features.map((feature) => (
    <div key={feature.title}>
      <p className="mb-4 inline-block rounded-full bg-primary-100 p-4 text-center text-2xl text-primary-500 md:mb-6 md:text-3xl xl:mb-8 xl:text-4xl">
        {feature.icon}
      </p>
      <p className="mb-2 text-lg font-bold text-accent-500 lg:mb-4 lg:text-xl xl:text-2xl">
        {feature.title}
      </p>
      <p className="text-sm lg:text-base xl:text-lg">{feature.description}</p>
    </div>
  ));
}
