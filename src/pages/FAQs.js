import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import faq from "../assets/Image/faq-banner.jpg";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What service does Road Jet offer?",
      answer:
        "We offer a pick and drop service from your chosen location to your desired destination. (From Sydney to Canberra and Canberra to Sydney)",
    },
    {
      question: "Why should I travel with Road Jet?",
      answer:
        "We offer a 24-hour service. It’s simple, travel at your own convenience and you don’t rely on or work around airline, bus or train schedules. It is as simple as being picked up from your requested address and dropped to your required destination.",
    },
    {
      question: "What type of car will I be travelling in?",
      answer:
        "You’ll be travelling in a 2011 model or above family size sedan, which meets the state safety check requirements.",
    },
    {
      question: "What if the car breaks down?",
      answer:
        "Should the car breakdown during your trip, we will replace the car as soon as possible and have you on your way. We will also provide a 50% refund for that trip.",
    },
    {
      question: "What if I want to cancel my trip?",
      answer:
        "The following fees will be charged following the cancellation of the booking:\nLess than 6 hours notice – 100% Cancellation Fee\nLess than 12 hours notice – 50% Cancellation Fee\n\nThe following fees will be charged for alterations of the booking:\nMore than 12 hours notice – No charges apply\nLess than 12 hours notice - $50 AUD\nLess than 6 hours notice - $150 AUD\n\nFor Cancellation/Alterations you must Call us and E-Mail.",
    },
    {
      question: "What if I want to change my date and time?",
      answer:
        "If you want to reschedule your booking, a 6-hour notice from your scheduled booking time is required and can be done by contacting us on (02) 9721 2548 or simply email us at support@roadjet.com.au. If you do require an early pick-up than the scheduled time, we will try our best to accommodate this if you simply contact us.",
    },
    {
      question: "Am I safe traveling with Road Jet?",
      answer:
        "Yes, you are. We ensure all our drivers have a police and driving record check conducted. All drivers are also accredited by Point to Point in NSW and Access Canberra in ACT.",
    },
    {
      question: "What payment options do you have?",
      answer:
        "We accept all major cards. If you require a booking using Cab Charge, simply call us to make your booking.",
    },
    {
      question: "What is premium service?",
      answer:
        "Our premium service offers a luxurious vehicle that will transform an ordinary business or leisure trip into an extraordinary journey.",
    },
  ];

  return (
    <div>
      <div
        className="relative flex items-center justify-center w-full bg-cover bg-center text-white p-4"
        style={{ backgroundImage: `url(${faq})` }}
      >
        <div className="rounded-md text-center text-6xl font-bold my-10">
          <h2>Faqs</h2>
        </div>
      </div>
      <div className="container mx-auto mt-2 px-4 md:px-16">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-md mb-4 overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {openIndex === index ? (
                <ChevronUpIcon className="w-6 h-6 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-6 h-6 text-gray-500" />
              )}
            </button>
            <div
              className={`transition-max-height duration-300 ease-in-out ${
                openIndex === index ? "max-h-screen" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="p-4">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
