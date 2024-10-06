import Image from "next/image";

function Steps({ children }) {
  return (
    <div className="grid grid-cols-1 items-center gap-9 sm:grid-cols-2 md:mt-20">
      {children}
    </div>
  );
}

function StepImage({ image, alt }) {
  return (
    <div className="relative flex items-center justify-center">
      <span className="absolute -z-20 block w-[60%] rounded-full bg-primary-100 pb-[60%]"></span>
      <span className="absolute -z-10 block w-[45%] rounded-full bg-primary-200 pb-[45%]"></span>
      <Image src={image} alt={alt} className="w-[35%]" />
    </div>
  );
}

function StepInformations({ step, header, description }) {
  return (
    <div>
      <p className="mb-3 text-4xl font-semibold text-secondary-200 sm:text-6xl xl:text-7xl">
        {step}
      </p>
      <h3 className="mb-4 text-base font-bold leading-none text-accent-500 sm:mb-8 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {header}
      </h3>
      <p className="text-sm leading-6 md:text-base lg:text-lg">{description}</p>
    </div>
  );
}

Steps.StepImage = StepImage;
Steps.StepInformations = StepInformations;

export default Steps;
