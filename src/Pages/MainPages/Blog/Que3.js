import React from "react";

const Que3 = () => {
  return (
    <div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6 w-10"></th>
              <th scope="col" className="py-3 px-6 w-1/2">
                JavaScript
              </th>
              <th scope="col" className="py-3 px-6 w-1/2">
                NodeJS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                1.
              </th>
              <td className="py-4 px-6">
                Javascript is a programming language that is used for writing
                scripts on the website
              </td>
              <td className="py-4 px-6">
                NodeJS is a Javascript runtime environment
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                2.
              </th>
              <td className="py-4 px-6">
                Javascript can only be run in the browsers
              </td>
              <td className="py-4 px-6">
                We can run Javascript outside the browser with the help of
                NodeJS
              </td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                3.
              </th>
              <td className="py-4 px-6">
                It is basically used on the client-side
              </td>
              <td className="py-4 px-6">
                It is mostly used on the server-side
              </td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                4.
              </th>
              <td className="py-4 px-6">
                Javascript is capable enough to add HTML and play with the DOM
              </td>
              <td className="py-4 px-6">
                Nodejs does not have capability to add HTML tags
              </td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                5.
              </th>
              <td className="py-4 px-6">
                It is the upgraded version of ECMA script that uses Chrome’s V8
                engine written in C++
              </td>
              <td className="py-4 px-6">
                Nodejs is written in C, C++ and Javascript
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Que3;
