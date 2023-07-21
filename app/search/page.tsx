export default function SearchPage() {
  return (
    <div className="flex">
      <section className="flex-1 p-8 sm:p-16">
        <div className="flex flex-col space-y-2">
          <p className="text-xs">Found 300+ stays for 2 guests</p>
          <h1 className="text-3xl font-bold tracking-tight">Stays in London</h1>
        </div>

        <div className="hidden items-center space-x-2 border-b border-stone-200 py-8 lg:flex">
          <div className="filter-button">Cancellation Flexibility</div>
          <div className="filter-button">Type of Place</div>
          <div className="filter-button">Price</div>
          <div className="filter-button">Rooms and Beds</div>
          <div className="filter-button">More filters</div>
        </div>
      </section>
    </div>
  );
}
