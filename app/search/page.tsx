import { redirect } from "next/navigation";
import { format } from "date-fns";

import PropertyCard from "@/components/PropertyCard";
import MapView from "@/components/MapView";

import { fetchProperties } from "@/lib/fetchProperties";

type Props = {
  searchParams: {
    location: string | undefined;
    from: string | undefined;
    to: string | undefined;
    guests: string | undefined;
  };
};

export default async function SearchPage({ searchParams }: Props) {
  const {
    location,
    from: startDate,
    to: endDate,
    guests: noOfGuests,
  } = searchParams;

  if (!location || !startDate || !endDate || !noOfGuests) {
    redirect("/");
  }

  // fetch properties based on search params
  const properties: Property[] = await fetchProperties();

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="flex">
      <section className="flex-1 p-8 lg:py-12 xl:h-[calc(100vh-153px)] xl:overflow-y-scroll">
        <div className="flex flex-col space-y-6 border-b border-stone-200 pb-8 lg:pb-12">
          <div className="flex flex-col space-y-2">
            <p className="text-xs">
              {properties.length}+ stays | {range} | {noOfGuests} guests
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              Stays in {location}
            </h1>
          </div>

          <div className="hidden items-center space-x-2 lg:flex">
            <div className="filter-button">Cancellation Flexibility</div>
            <div className="filter-button">Type of Place</div>
            <div className="filter-button">Price</div>
            <div className="filter-button">Rooms and Beds</div>
            <div className="filter-button">More filters</div>
          </div>
        </div>

        <div className="flex flex-col">
          {properties.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </section>

      <section className="hidden h-[calc(100vh-153px)] border-l border-stone-200 bg-stone-50 xl:block xl:w-2/5 2xl:w-1/2">
        <MapView properties={properties} />
      </section>
    </div>
  );
}
