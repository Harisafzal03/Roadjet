import React from "react";
import faq from "../assets/Image/faq-banner.jpg";

const Price = () => {
  return (
    <div>
      <div
        className="relative flex items-center justify-center w-full bg-conatin text-white p-4"
        style={{ backgroundImage: `url(${faq})` }}
      >
        <div className="rounded-md text-center text-6xl font-bold my-10">
          <h2>Sydney to Canberra Price</h2>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-16 py-8">
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Service Pricing
          </h2>
          <div className="space-y-4">
            <div className="text-2xl md:text-3xl lg:text-4xl">
              <h3 className="font-bold">Standard Service</h3>
              <br />
              <p>One-Way $399 (AUD)</p>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4x">
              <h3 className="font-bold">Premium Service</h3>
              <br />
              <p>One-Way $750 (AUD)</p>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl">
              <h3 className="font-bold">XL SUV Service</h3>
              <br />
              <p>One-Way $750 (AUD)</p>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl">
              <h3 className="font-bold">XL Van Service</h3>
              <br />
              <p>One-Way $850 (AUD)</p>
            </div>
            <div className="text-2xl md:text-3xl lg:text-4xl">
              <h3 className="font-bold">XL Mini Bus Service</h3>
              <br />
              <p>One-Way $900 (AUD)</p>
            </div>
          </div>
          <p className="mt-6 text-lg md:text-xl lg:text-xl">
            For all XL bookings please give us a call on:{" "}
            <a href="tel:(02) 9721 2548" className="text-blue-500">
              (02) 9721 2548
            </a>{" "}
            or email us at{" "}
            <a href="mailto:support@roadjet.com.au" className="text-blue-500">
              support@roadjet.com.au
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Price;
