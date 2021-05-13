import { getAll } from "../common/data";
import LogoGrid from "../components/LogoGrid";

const Home = () => {
  const data = getAll();
  return (
    <main className="flex flex-col mx-8 mt-12 space-y-10 text-center align-middle">
      <LogoGrid data={data as any} />
      <div className="mt-10" />
    </main>
  );
};

export default Home;
