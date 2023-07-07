import Image from "next/image";

type Props = {
  buttonLabel: string;
  description: string;
  image: string;
  title: string;
};

export default function Jumbotron({
  buttonLabel,
  description,
  image,
  title,
}: Props) {
  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-lg px-8 py-12 sm:px-12 sm:py-16">
      <Image
        src={image}
        alt="Jumbotron"
        fill
        className="object-cover object-center"
      />

      <div className="relative">
        <h3 className="w-64 text-3xl sm:text-4xl">{title}</h3>
        <p className="mt-4">{description}</p>

        <button className="mt-6 rounded-lg bg-stone-900 px-4 py-2 text-sm text-white">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
