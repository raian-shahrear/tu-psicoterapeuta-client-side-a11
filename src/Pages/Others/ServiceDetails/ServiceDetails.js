import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import ReviewSection from './ReviewSection';
import ServiceSection from './ServiceSection';

const ServiceDetails = () => {
  useTitle('Service Details');
  const service = useLoaderData();
  
  return (
    <section className="mb-44 sm:mb-24 mt-[90px]">
      <div>
        <ServiceSection service={service.data} />
      </div>
      <div className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0 mt-24">
        <ReviewSection service={service.data} />
      </div>
    </section>
  );
};

export default ServiceDetails;