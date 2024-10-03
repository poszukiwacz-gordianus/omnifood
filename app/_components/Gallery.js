import Image from "next/image";

export default function Gallery({ images }) {
  return images.map((image, index) => (
    <figure key={index} className="overflow-hidden">
      <Image
        src={image}
        alt="Photo of beautifully arranged food"
        className="w-full transition-all duration-[400ms] hover:scale-110"
      />
    </figure>
  ));
}
