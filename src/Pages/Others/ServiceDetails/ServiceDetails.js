import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceSection from './ServiceSection';

const ServiceDetails = () => {
  const service = useLoaderData();
  
  return (
    <section className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0 mb-24 mt-36">
      <div>
        <ServiceSection service={service.data} />
      </div>
      <div>

      </div>
    </section>
  );
};

export default ServiceDetails;