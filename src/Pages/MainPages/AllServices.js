import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import DisplayServices from "../Others/DisplayServices";

const AllServices = () => {
  useTitle("All Services");
  // const services = useLoaderData();
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(count / dataPerPage);

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?page=${currentPage}&dataSize=${dataPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setCount(data.count);
      });
  }, [currentPage, dataPerPage]);

  console.log(services, count);

  return (
    <section className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0 mb-24 mt-36">
      <h2 className="text-4xl text-center lg:text-start font-semibold text-green-700 mb-8">
        Explore All Services
      </h2>

      {/*==================
           Pagination 
      ==================*/}
      <div className="mb-12 lg:mb-10">
        <div className="flex justify-center gap-3">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`me-3 ${
                currentPage === num
                  ? "bg-green-700 text-white font-medium py-1 px-4"
                  : "bg-gray-300 text-gray-900 font-medium py-1 px-4"
              }`}
            >
              {num + 1}
            </button>
          ))}
          <select
            className="ml-8 border-transparent bg-gray-300 text-gray-900 font-medium focus:outline-none focus:border-green-700"
            onChange={(event) => setDataPerPage(event.target.value)}
          >
            <option value="3" selected>
              3
            </option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
      {/* ------------------------ */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services?.map((service) => (
          <DisplayServices key={service._id} service={service} />
        ))}
      </div>

      {/*==================
           Pagination 
      ==================*/}
      <div className="mt-12 lg:mt-10">
        <div className="flex justify-center gap-3">
          {[...Array(totalPages).keys()].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`me-3 ${
                currentPage === num
                  ? "bg-green-700 text-white font-medium py-1 px-4"
                  : "bg-gray-300 text-gray-900 font-medium py-1 px-4"
              }`}
            >
              {num + 1}
            </button>
          ))}
          <select
            className="ml-8 border-transparent bg-gray-300 text-gray-900 font-medium focus:outline-none focus:border-green-700"
            onChange={(event) => setDataPerPage(event.target.value)}
          >
            <option value="3" selected>
              3
            </option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
