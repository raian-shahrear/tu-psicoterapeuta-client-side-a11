import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const medium = form.medium.value;
    const duration = form.duration.value;
    const details = form.details.value;

    const service = {
      serviceName: name,
      serviceImg: image,
      servicePrice: price,
      serviceRating: rating,
      serviceMedium: medium,
      serviceDuration: duration,
      serviceDetails: details,
    };

    fetch("http://localhost:5000/service", {
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
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <div className="mt-32 mb-24 lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0">
      <h2 className="text-4xl font-semibold text-green-700 mb-6">
        Add A Service
      </h2>
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
                  defaultValue={"$ price"}
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
                <input
                  id="medium"
                  name="medium"
                  type="text"
                  placeholder="online / offline"
                  className="bg-gray-200 border border-transparent text-gray-700 text-sm focus:ring-green-700 focus:border-green-700 focus:bg-gray-50 block w-full p-2.5"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="time-duration" className="text-sm">
                  Service Duration <span className="text-red-700">*</span>
                </label>
                <input
                  id="time-duration"
                  type="text"
                  name="duration"
                  placeholder="hour / day"
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
            <div>
              <input
                type="submit"
                value="Add Service"
                className="bg-green-700 text-white font-medium py-2 px-3 cursor-pointer transition duration-300 hover:bg-green-800"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddService;
