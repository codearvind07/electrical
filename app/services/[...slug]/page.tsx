import ServiceSection from "@/components/ServiceSection";
import React from "react";

interface Props {
  params: {
    slug: string[];
  };
}

const ServicePage = ({ params }: Props) => {
  const [category, location] = params.slug;

  return (
    <div className="p-6 container mx-auto">
     
      <ServiceSection category={category} location={location} />
    </div>
  );
};

export default ServicePage;
