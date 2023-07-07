import Link from "next/link";
import Image from "next/image";

import bannerImage from "@/assets/banner.jpeg";

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src={bannerImage}
        alt="Banner"
        fill
        className="object-cover object-center"
      />

      <div className="relative flex h-full w-full flex-col items-center justify-center space-y-4 text-center lg:space-y-8">
        <p className="rounded-full font-bold text-white drop-shadow sm:text-lg lg:text-xl">
          Not sure where to go? Perfect.
        </p>

        <Link
          href="/"
          className="rounded-full bg-white px-9 py-3 font-bold text-rose-500 shadow transition-all hover:shadow-lg active:scale-90 sm:px-12 sm:py-4"
        >
          I&apos;m flexible
        </Link>
      </div>
    </div>
  );
}
