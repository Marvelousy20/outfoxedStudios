interface Props {
  name: string;
}

function CompanyCard({ name }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md m-4">
      <h2 className="text-xl text-gray-800 dark:text-white font-semibold">
        {name}
      </h2>
    </div>
  );
}

function CompanyList() {
  const companies = [
    "Raid Shadow Legends",
    "Manscaped",
    "Bang Energy",
    "Asus",
    "Ewin Gaming Chair",
    "Secret Lab",
    "SteelSeries",
    "Invader Coffee",
    "Gfuel",
    "Statefarm",
  ];

  return (
    <div data-aos="fade-in">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-center mb-6 text-primary-main">
        Companies We&apos;ve done Ads for
      </h2>
      <div className="flex flex-wrap justify-center">
        {companies.map((company, index) => (
          <div key={index}>
            <CompanyCard name={company} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyList;
