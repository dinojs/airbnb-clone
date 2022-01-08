import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

export default function Search({ searchResults }) {
  const router = useRouter();

  const { location, startDate, endDate, nGuests } = router.query;

  const fStartDate = format(new Date(startDate), "dd MMMM yy");
  const fEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${fStartDate} - ${fEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${nGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            500+ Stays - {range} for {nGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>

      {/* flex defaults to row, so convert to col */}
      <div className="flex flex-col">
        {searchResults?.map(
          ({ img, location, title, description, star, price, total }) => (
            <InfoCard
              key={img}
              img={img}
              location={location}
              title={title}
              description={description}
              star={star}
              price={price}
              total={total}
            />
          )
        )}
      </div>

      <Footer />
    </div>
  );
}

// Fetch data on each request
export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return { props: { searchResults } };
}