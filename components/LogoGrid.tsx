import { IDisplayElementProps } from "../common/types";
import { InternalExternalLink } from "./StyledLinks";

const LogoGrid = ({ data }: IDisplayElementProps) => {
  return (
    <div className="flex justify-center">
      <div className="grid max-w-3xl grid-cols-2 gap-10 mt-6 sm:grid-cols-3 md:grid-cols-4">
        {Object.keys(data).map((id) => (
          <InternalExternalLink key={id} href={data[id].homepage} external>
            <div className="flex flex-col group">
              <div className="flex justify-center">
                <div className="w-20 p-0 transition duration-300 ease-in-out rounded-full group-hover:shadow-lg md:w-32 sm:w-24">
                  <img
                    className="inline-block w-20 rounded-full md:w-32 sm:w-24"
                    src={`/logo/lg/${id}.jpeg`}
                    alt={data[id].name}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4 font-semibold text-blue-500 group-hover:text-blue-700">
                {data[id].name}
              </div>
            </div>
          </InternalExternalLink>
        ))}
      </div>
    </div>
  );
};
export default LogoGrid;
