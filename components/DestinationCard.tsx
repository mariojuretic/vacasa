import Image from "next/image";

export default function DestinationCard({
  distance,
  image,
  name,
}: Destination) {
  return (
    <div className="flex cursor-pointer items-center space-x-4 rounded-lg transition-all hover:scale-105 hover:bg-stone-100">
      <div className="relative h-16 w-16 overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="64px"
        />
      </div>

      <div>
        <h2>{name}</h2>
        <p className="text-stone-500">{distance}</p>
      </div>
    </div>
  );
}
