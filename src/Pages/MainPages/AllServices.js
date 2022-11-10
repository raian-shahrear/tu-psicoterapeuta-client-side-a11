import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import DisplayServices from "../Others/DisplayServices";

const AllServices = () => {
  useTitle('All Services');
  const services = useLoaderData();

  return (
    <section className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0 mb-24 mt-36">
      <h2 className="text-4xl font-semibold text-green-700 mb-6">
        Explore All Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.data.map((service) => (
          <DisplayServices key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default AllServices;
