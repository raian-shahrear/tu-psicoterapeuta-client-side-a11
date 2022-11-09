import React from "react";
import img1 from "../../../Resources/blog/web-developer.svg";
import img2 from "../../../Resources/blog/typewriter.svg";
import { FaQuestionCircle } from "react-icons/fa";
import Que1 from "./Que1";

const Blog = () => {
  return (
    <main className="mb-24 mt-24">
      <header className="flex bg-gray-50 lg:bg-gray-500 pt-10 relative">
        <img src={img1} alt="blogImg" className="w-full h-96" />
        <img src={img2} alt="blogImg" className="w-full h-96 hidden lg:block" />
        <h1 className="text-6xl text-green-700 font-bold absolute top-48 left-1/2 lg:left-3/4">
          Blog
        </h1>
      </header>
      <section className="my-24 lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0">
        <h2 className="text-4xl font-semibold text-green-700 mb-8 flex gap-3">
          <FaQuestionCircle />
          Frequently Asked Questions
        </h2>
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Q1. Difference between SQL and NoSQL.
          </h3>
          <Que1 />
        </div>
      </section>
    </main>
  );
};

export default Blog;
