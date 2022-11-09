import React from "react";

const Que1 = () => {
  return (
    <div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6 w-10"></th>
              <th scope="col" className="py-3 px-6 w-1/2">
                SQL
              </th>
              <th scope="col" className="py-3 px-6 w-1/2">
                NoSQL
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
                SQL databases are primarily called RDBMS or Relational database
              </td>
              <td className="py-4 px-6">
                NoSQL databases are primarily called as Non-relational or
                Distributed database
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                2.
              </th>
              <td className="py-4 px-6">It is structured query language</td>
              <td className="py-4 px-6">It is no declarative query language</td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                3.
              </th>
              <td className="py-4 px-6">
                SQL databases are table based database
              </td>
              <td className="py-4 px-6">
                NoSQL databases can be document based, key-value pairs or graph
                based database
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
                SQL databases have a predefined schema
              </td>
              <td className="py-4 px-6">
                NoSQL databases use dynamic schema for unstructured data
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
                These databases are not suited for hierarchical data storage
              </td>
              <td className="py-4 px-6">
                These databases are best suited for hierarchical data storage
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Que1;
