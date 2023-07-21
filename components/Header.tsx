"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { format } from "date-fns";

import progress from "@/lib/progress";
import { useSearchStore } from "@/store/SearchStore";

import logo from "@/assets/logo.png";
import "@/styles/react-date-range.css";

export default function Header() {
  const router = useRouter();

  const [
    searchTerm,
    startDate,
    endDate,
    noOfGuests,
    setSearchTerm,
    setDates,
    incrementNoOfGuests,
    decrementNoOfGuests,
    resetSearch,
  ] = useSearchStore((state) => [
    state.searchTerm,
    state.startDate,
    state.endDate,
    state.noOfGuests,
    state.setSearchTerm,
    state.setDates,
    state.incrementNoOfGuests,
    state.decrementNoOfGuests,
    state.resetSearch,
  ]);

  const dateChangeHandler = ({ selection }: RangeKeyDict) => {
    if (!selection.startDate || !selection.endDate) return;
    setDates(selection.startDate, selection.endDate);
  };

  const searchHandler = () => {
    const formattedStartDate = format(new Date(startDate), "yyyy-MM-dd");
    const formattedEndDate = format(new Date(endDate), "yyyy-MM-dd");

    router.push(
      `/search?location=${searchTerm}&from=${formattedStartDate}&to=${formattedEndDate}&guests=${noOfGuests}`
    );

    progress.start();
    resetSearch();
  };

  const selectionRange = { startDate, endDate, key: "selection" };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 items-center gap-4 bg-white p-4 shadow lg:grid-cols-3 lg:gap-x-0 lg:gap-y-6 lg:px-12 lg:py-6 xl:gap-x-6">
      <Link href="/" className="relative order-1 block h-8 w-36">
        <Image
          src={logo}
          alt="Logo"
          fill
          className="object-contain object-left"
          sizes="144px"
        />
      </Link>

      <div className="order-3 col-span-2 flex rounded-full border border-stone-200 p-1 lg:order-2 lg:col-span-1 lg:border-2 lg:p-2">
        <input
          type="text"
          className="flex-1 bg-transparent px-4 text-sm text-stone-600 outline-none placeholder:text-stone-400"
          placeholder="Where do you want to go?"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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

      {searchTerm && (
        <div className="order-4 col-span-2 flex justify-center lg:col-span-3">
          <div className="flex flex-col space-y-2 lg:space-y-3">
            <DateRangePicker
              showMonthAndYearPickers={false}
              minDate={new Date()}
              ranges={[selectionRange]}
              onChange={dateChangeHandler}
            />

            <div className="flex items-center justify-between text-sm">
              <div className="px-2">Number of Guests</div>

              <div className="flex items-center space-x-2">
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100 text-stone-500 hover:bg-stone-200 disabled:cursor-not-allowed disabled:text-stone-300 disabled:hover:bg-stone-100"
                  disabled={noOfGuests === 1}
                  onClick={decrementNoOfGuests}
                >
                  <MinusIcon className="h-4 w-4" />
                </button>
                <span className="flex h-8 w-16 items-center justify-center rounded-lg border border-stone-100">
                  {noOfGuests}
                </span>
                <button
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-stone-100 text-stone-500 hover:bg-stone-200"
                  onClick={incrementNoOfGuests}
                >
                  <PlusIcon className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-sm">
              <button
                className="flex-1 rounded-lg bg-stone-200 p-2 hover:bg-stone-300"
                onClick={resetSearch}
              >
                Cancel
              </button>
              <button
                className="flex-1 rounded-lg bg-rose-500 p-2 text-white hover:bg-rose-600"
                onClick={searchHandler}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
