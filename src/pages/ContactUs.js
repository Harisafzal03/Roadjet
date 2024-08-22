import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import faq from "../assets/Image/faq-banner.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "contactUs"), formData);
      setMessage("Your message has been sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      setMessage(
        "There was an error sending your message. Please try again later.",
      );
      console.error("Error adding document: ", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="relative flex items-center justify-center w-full bg-conatin text-white p-4"
        style={{ backgroundImage: `url(${faq})` }}
      >
        <div className="rounded-md text-center text-6xl font-bold my-10">
          <h2>Contact us</h2>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-16 py-8">
        <div className="bg-gray-100 p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-bold mb-4">Have an enquiry?</h2>
          <p>
            If you have an urgent enquiry please contact our team on (02) 9721
            2548 or alternatively you can fill out the form below and one of our
            friendly team members will be in contact with you as soon as
            possible.
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700">
                  Message (Max 1000 characters)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength="1000"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="4"
                />
              </div>
            </div>
            <button
              type="submit"
              className={`mt-4 px-4 py-2 text-white bg-blue-500 rounded-md ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          {message && <p className="mt-4">{message}</p>}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p>ROAD JET PTY LTD</p>
          <p>ABN: 63630008749</p>
          <p>Phone No: (02) 9721 2548</p>
          <p>
            Email:{" "}
            <a href="mailto:support@roadjet.com.au" className="text-blue-500">
              support@roadjet.com.au
            </a>
          </p>
          <p>Address: 1/15 Queen St, Goulburn, NSW, 2580, AUSTRALIA</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
