import Link from "next/link";
import Image from "next/image";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import logo from "@/assets/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 items-center gap-4 bg-white p-4 shadow lg:grid-cols-3 lg:px-12 lg:py-6">
      <Link href="/" className="relative order-1 block h-8 w-36">
        <Image
          src={logo}
          alt="Logo"
          fill
          className="object-contain object-left"
        />
      </Link>

      <div className="order-3 col-span-2 flex rounded-full border border-stone-200 p-1 lg:order-2 lg:col-span-1 lg:border-2 lg:p-2">
        <input
          type="text"
          className="flex-1 bg-transparent px-4 text-sm text-stone-600 outline-none placeholder:text-stone-400"
          placeholder="Where do you want to go?"
        />
        <MagnifyingGlassIcon className="h-8 w-8 shrink-0 cursor-pointer rounded-full bg-rose-500 p-2 text-white" />
      </div>

      <div className="order-2 flex items-center justify-end space-x-4 text-stone-500 lg:order-3">
        <p className="hidden cursor-pointer lg:block">Become a host</p>
        <GlobeAltIcon className="h-6 w-6 cursor-pointer" />

        <div className="flex items-center space-x-2 rounded-full border border-stone-200 px-4 py-2 lg:border-2">
          <Bars3Icon className="h-6 w-6 cursor-pointer" />
          <UserCircleIcon className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
