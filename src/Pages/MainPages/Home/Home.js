import React from "react";
import HeaderOfHome from "./HeaderOfHome";

const Home = () => {
  return (
    <div>
      <header>
        <HeaderOfHome />
      </header>
      <section className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0">
        hello from home
      </section>
    </div>
  );
};

export default Home;
