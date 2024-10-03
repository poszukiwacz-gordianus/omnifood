export default function FeaturesCard({ features }) {
  return features.map((feature) => (
    <div key={feature.title}>
      <p className="mb-8 inline-block rounded-full bg-primary-100 p-4 text-center text-4xl text-primary-500">
        {feature.icon}
      </p>
      <p className="mb-4 text-2xl font-bold text-accent-500">{feature.title}</p>
      <p className="text-lg">{feature.content}</p>
    </div>
  ));
}
