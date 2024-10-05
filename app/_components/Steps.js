import Image from "next/image";

function Steps({ children }) {
  return (
    <div className="grid grid-cols-2 items-center gap-x-10 gap-y-24">
      {children}
    </div>
  );
}

function StepImage({ image, alt }) {
  return (
    <div className="relative flex items-center justify-center">
      <span className="absolute -z-20 block w-[60%] rounded-full bg-primary-100 pb-[60%]"></span>
      <span className="absolute -z-10 block w-[45%] rounded-full bg-primary-200 pb-[45%]"></span>
      <Image src={image} alt={alt} className="w-1/3" />
    </div>
  );
}

function StepInformations({ step, header, description }) {
  return (
    <div>
      <p className="mb-3 text-7xl font-semibold text-secondary-200">{step}</p>
      <h3 className="mb-8 text-3xl font-bold leading-none text-accent-500">
        {header}
      </h3>
      <p className="text-lg">{description}</p>
    </div>
  );
}

Steps.StepImage = StepImage;
Steps.StepInformations = StepInformations;

export default Steps;
