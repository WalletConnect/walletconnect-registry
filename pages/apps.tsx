import { getDapps } from "../common/data";
import LogoGrid from "../components/LogoGrid";

const Apps = () => {
  const data = getDapps();
  return (
    <>
      <LogoGrid data={data as any} />
      <div className="mt-10" />
    </>
  );
};

export default Apps;
