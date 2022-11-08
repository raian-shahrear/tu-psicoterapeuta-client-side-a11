import React from "react";
import appointmentImg from '../../../Resources/appointment/appointment.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {

  const handleAppointment = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const date = event.target.date.value;
    const message = event.target.message.value;

    if(name && email && phone && date && message){
      toast.success('Thanks for booking an appointment!', {autoClose: 2000})
      event.target.reset();
    }
  }

  return (
    <div>
      <section className="text-gray-700 flex flex-col lg:flex-row-reverse items-center justify-between">
        <div className="w-full lg:w-5/12">
          <img src={appointmentImg} alt="appointment" className="w-full lg:w-11/12 ml-auto" />
        </div>
        <form onSubmit={handleAppointment} className="flex flex-col w-full lg:w-6/12 space-y-12">
          <fieldset className="grid gap-6 p-6 rounded-md shadow-lg">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="name" className="text-sm">
                  Full name <span className="text-red-700">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="name"
                  className="w-full py-2 px-3 bg-gray-200 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email <span className="text-red-700">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email"
                  className="w-full py-2 px-3 bg-gray-200 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="phone" className="text-sm">
                  Phone Number <span className="text-red-700">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="+880**********"
                  className="w-full py-2 px-3 bg-gray-200 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="date" className="text-sm">
                  Date of Appointment<span className="text-red-700">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  className="w-full py-2 px-3 bg-gray-200 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700"
                  required
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="message" className="text-sm">
                  Message <span className="text-red-700">*</span>
                </label>
                <textarea
                  id="message"
                  type="text"
                  name="message"
                  placeholder="your message..."
                  className="w-full h-32 py-2 px-3 bg-gray-200 border-transparent focus:ring-1 focus:outline-none focus:ring-green-700"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="submit"
                value="Book Appointment"
                className="bg-green-700 text-white py-2 px-3 cursor-pointer transition duration-300 hover:bg-green-800"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Appointment;
