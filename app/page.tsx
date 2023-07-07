import Banner from "@/components/Banner";
import DestinationCard from "@/components/DestinationCard";
import { fetchDestinations } from "@/lib/fetchDestinations";

export default async function HomePage() {
  const destinations: Destination[] = await fetchDestinations();

  return (
    <>
      <Banner />

      <main className="mx-auto max-w-7xl px-8 pb-8 sm:px-16 sm:pb-16">
        <section className="pt-8 sm:pt-16">
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Nearby
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations?.map(({ distance, image, name }) => (
              <DestinationCard
                key={name}
                distance={distance}
                image={image}
                name={name}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
