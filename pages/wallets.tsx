import { getWallets } from "../common/data";
import LogoGrid from "../components/LogoGrid";

const Wallets = () => {
  const data = getWallets();
  return (
    <>
      <LogoGrid data={data as any} />
      <div className="mt-10" />
    </>
  );
};

export default Wallets;
