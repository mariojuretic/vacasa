import Image from "next/image";

export default function ExperienceCard({ image, name }: Experience) {
  return (
    <div className="cursor-pointer space-y-4 transition-all hover:scale-105">
      <div className="relative h-80 w-80 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
        />
      </div>

      <h3 className="text-2xl">{name}</h3>
    </div>
  );
}
