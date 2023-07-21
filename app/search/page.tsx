import PropertyCard from "@/components/PropertyCard";

import { fetchProperties } from "@/lib/fetchProperties";

export default async function SearchPage() {
  const properties: Property[] = await fetchProperties();

  return (
    <div className="flex">
      <section className="flex-1 p-8 lg:py-12">
        <div className="flex flex-col space-y-6 border-b border-stone-200 pb-8 lg:pb-12">
          <div className="flex flex-col space-y-2">
            <p className="text-xs">Found 300+ stays for 2 guests</p>
            <h1 className="text-3xl font-bold tracking-tight">
              Stays in London
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

      <section className="hidden bg-stone-400 xl:block xl:w-2/5 2xl:w-1/2">
        {/* Map */}
      </section>
    </div>
  );
}
