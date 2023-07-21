import Image from "next/image";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

export default function PropertyCard({
  description,
  image,
  lat,
  long,
  price,
  rating,
  subtitle,
  title,
  total,
}: Property) {
  return (
    <div className="flex cursor-pointer flex-col space-y-6 border-b border-stone-200 py-6 transition-all hover:opacity-80 sm:flex-row sm:space-x-6 sm:space-y-0 lg:px-6 lg:hover:shadow-lg">
      <div>
        <div className="relative aspect-video w-full sm:aspect-auto sm:h-52 sm:w-52 md:w-80">
          <Image
            src={image}
            alt={subtitle}
            fill
            className="rounded-lg object-cover object-center"
            sizes="(max-width: 639px) 100vw, (max-width: 767px) 208px, 320px"
          />

          <HeartIcon className="absolute right-2 top-2 h-6 w-6 fill-black/40 stroke-white drop-shadow" />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <p className="text-stone-700">{subtitle}</p>
        <h4 className="text-xl">{title}</h4>
        <div className="my-3 h-px w-10 bg-stone-200" />
        <p className="flex-1 text-sm text-stone-500">{description}</p>

        <div className="mt-3 flex items-end justify-between">
          <div className="flex items-center space-x-2">
            <StarIcon className="h-6 w-6 text-rose-500" />
            <span>{rating}</span>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-xl font-bold tracking-tight">{price}</p>
            <p className="font-light">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
