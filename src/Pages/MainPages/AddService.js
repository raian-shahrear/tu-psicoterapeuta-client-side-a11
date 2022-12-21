import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../../Hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddService = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const medium = form.medium.value;
    const duration = parseInt(form.duration.value);
    const details = form.details.value;
    if (isNaN(price)) {
      setIsLoading(false);
      return setError("Price must be a number!");
    }
    if (isNaN(rating) || rating > 5) {
      setIsLoading(false);
      return setError("Rating must be a number or between 5!");
    }

    const service = {
      serviceName: name,
      serviceImg: image,
      servicePrice: price,
      serviceRating: rating,
      serviceMedium: medium,
      serviceDuration: duration,
      serviceDetails: details,
    };

    fetch("https://tu-psicoterapeuta-server.vercel.app/service", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.acknowledged) {
          toast.success("Service is added successfully!", { autoClose: 2000 });
          form.reset();
          setError(false);
          setIsLoading(false);
          navigate("/all-services");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="mt-32 mb-24 lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0">
      <h2 className="text-4xl font-semibold text-green-700 mb-6">
        Add A Service
      </h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <section className="text-gray-700">
        <form
          onSubmit={handleAddService}
          className="flex flex-col w-full space-y-12"
        >
          <fieldset className="grid gap-6 p-6 rounded-md shadow-lg">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="name" className="text-sm">
                  Service Name <span className="text-red-700">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="service name"
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="imageUrl" className="text-sm">
                  Service Image <span className="text-red-700">*</span>
                </label>
                <input
                  id="imageUrl"
                  type="text"
                  name="image"
                  placeholder="service image url"
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="price" className="text-sm">
                  Service Price <span className="text-red-700">*</span>
                </label>
                <input
                  id="price"
                  type="text"
                  name="price"
                  placeholder="input price in number"
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="rating" className="text-sm">
                  Service Rating <span className="text-red-700">*</span>
                </label>
                <input
                  id="rating"
                  type="text"
                  name="rating"
                  placeholder="rating in number"
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="medium" className="text-sm">
                  Service Medium <span className="text-red-700">*</span>
                </label>
                <select
                  id="medium"
                  name="medium"
                  type="text"
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  required
                >
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="time-duration" className="text-sm">
                  Service Duration <span className="text-red-700">*</span>
                </label>
                <input
                  id="time-duration"
                  type="number"
                  name="duration"
                  min="5"
                  placeholder="duration in day"
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="details" className="text-sm">
                  Service Details <span className="text-red-700">*</span>
                </label>
                <textarea
                  id="details"
                  type="text"
                  name="details"
                  placeholder="service details..."
                  className="h-32 bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <input
                type="submit"
                value="Add Service"
                className="bg-green-700 w-72 text-white font-medium py-2 px-3 cursor-pointer transition duration-300 hover:bg-green-800"
              />
              {isLoading && (
                <div className="absolute bottom-2 left-14 w-6 h-6 border-2 border-dashed rounded-full animate-spin border-gray-200"></div>
              )}
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddService;
