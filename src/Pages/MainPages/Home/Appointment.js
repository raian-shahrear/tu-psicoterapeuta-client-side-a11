import React from "react";
import appointmentImg from '../../../Resources/appointment/appointment.svg';

const Appointment = () => {
  return (
    <div>
      <section className="text-gray-700 flex lg:flex-row-reverse items-center justify-between">
        <div className="w-5/12">
          <img src={appointmentImg} alt="appointment" className="w-11/12 ml-auto" />
        </div>
        <form className="flex flex-col w-6/12 space-y-12">
          <fieldset className="grid gap-6 p-6 rounded-md shadow-lg">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="name"
                  className="w-full py-2 px-3 bg-gray-200 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email"
                  className="w-full py-2 px-3 bg-gray-200 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="phone" className="text-sm">
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  defaultValue="+880"
                  className="w-full py-2 px-3 bg-gray-200 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="date" className="text-sm">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  className="w-full py-2 px-3 bg-gray-200 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  type="text"
                  placeholder="your message..."
                  className="w-full h-32 py-2 px-3 bg-gray-200 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700"
                />
              </div>
            </div>
            <div>
              <input
                type="submit"
                value="Send Message"
                className="mt-4 bg-green-700 text-white py-2 px-3 cursor-pointer transition duration-300 hover:bg-green-800"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Appointment;
