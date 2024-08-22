import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore"; // Add query and where here
import Banner from "../assets/Image/banner.jpg";

const Home = () => {
  const [services, setServices] = useState([]);
  const [tripTypes, setTripTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [Flights, setFlights] = useState([]);

  const [selectedService, setSelectedService] = useState("");
  const [selectedTripType, setSelectedTripType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedFromCity, setSelectedFromCity] = useState("");
  const [selectedToCity, setSelectedToCity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const servicesCollection = collection(db, "services");
      const servicesSnapshot = await getDocs(servicesCollection);
      setServices(servicesSnapshot.docs.map((doc) => doc.data()));

      const tripTypesCollection = collection(db, "tripTypes");
      const tripTypesSnapshot = await getDocs(tripTypesCollection);
      setTripTypes(tripTypesSnapshot.docs.map((doc) => doc.data()));

      const citiesCollection = collection(db, "cities");
      const citiesSnapshot = await getDocs(citiesCollection);
      setCities(citiesSnapshot.docs.map((doc) => doc.data()));
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFlights = async () => {
      if (
        selectedService &&
        selectedTripType &&
        selectedDate &&
        selectedFromCity &&
        selectedToCity
      ) {
        const flightsCollection = collection(db, "flights");
        const flightsQuery = query(
          flightsCollection,
          where("serviceType", "==", selectedService),
          where("tripType", "==", selectedTripType),
          where("date", "==", selectedDate),
          where("fromCity", "==", selectedFromCity),
          where("toCity", "==", selectedToCity),
        );
        const flightsSnapshot = await getDocs(flightsQuery);
        setFlights(flightsSnapshot.docs.map((doc) => doc.data()));
      }
    };

    fetchFlights();
  }, [
    selectedService,
    selectedTripType,
    selectedDate,
    selectedFromCity,
    selectedToCity,
  ]);

  console.log(Flights);

  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="bg-orange-700 w-full md:max-w-[30%] text-white p-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Booking</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-4">
                <div className="flex space-x-4">
                  {services.map((service, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="service"
                        className="form-radio text-black"
                        value={service.name}
                        onChange={(e) => setSelectedService(e.target.value)}
                      />
                      <span>{service.name}</span>
                    </label>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {tripTypes.map((tripType, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="tripType"
                        className="form-radio text-black"
                        value={tripType.name}
                        onChange={(e) => setSelectedTripType(e.target.value)}
                      />
                      <span>{tripType.name}</span>
                    </label>
                  ))}
                </div>
                <input
                  type="date"
                  className="form-input w-full p-2 rounded text-black"
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
                <input
                  type="time"
                  className="form-input w-full p-2 rounded text-black"
                />

                <select
                  className="form-select w-full p-2 rounded text-black"
                  onChange={(e) => setSelectedFromCity(e.target.value)}
                >
                  <option>Select city</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
                <select
                  className="form-select w-full p-2 rounded text-black"
                  onChange={(e) => setSelectedToCity(e.target.value)}
                >
                  <option>Select city</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </select>
                <button className="bg-black text-white w-full p-4 rounded">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative flex items-center justify-center w-full bg-cover bg-center text-white p-4"
          style={{ backgroundImage: `url(${Banner})` }} // Replace with your image URL
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-md max-w-4xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-4">
              COVID SAFETY MEASURES ARE IN PLACE FOR OUR PASSENGERS AND DRIVERS.
            </h2>
            <p className="mb-4">
              Road Jet operates a 24-hour service, which allows an easier way to
              travel between Canberra and Sydney. Offering a convenient door to
              destination private transfer service. No hassles involved compared
              to when traveling by air such as getting to the airport, airport
              queuing, and flight delay or flight cancellations.
            </p>
            <p className="mb-2">
              <strong>Standard Service:</strong> 1 to 3 people in a family size
              sedan.
            </p>
            <p className="mb-2">
              <strong>XL Suv Service:</strong> 1 to 4 people or extra luggage
              space.
            </p>
            <p className="mb-2">
              <strong>XL Van Service:</strong> 1 to 6 people or extra luggage
              space.
            </p>
            <p className="mb-2">
              <strong>XL Mini Bus Service:</strong> 1 to 10 people or extra
              luggage space.
            </p>
            <p className="mb-2">
              <strong>Premium Service:</strong> A luxurious vehicle that will
              transform an ordinary business or leisure trip into an
              extraordinary journey.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Available Flights</h2>
        {Flights.length > 0 ? (
          Flights.map((flightData, dataIndex) => (
            <div key={dataIndex} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                From: {flightData.fromCity} to {flightData.toCity}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border-b">Flight Number</th>
                      <th className="px-4 py-2 border-b">Departure Time</th>
                      <th className="px-4 py-2 border-b">Arrival Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {flightData.availableFlights.map((flight, index) => (
                      <tr key={index} className="text-center">
                        <td className="px-4 py-2 border-b">
                          {flight.flightNumber || "N/A"}
                        </td>
                        <td className="px-4 py-2 border-b">
                          {flight.departureTime || "N/A"}
                        </td>
                        <td className="px-4 py-2 border-b">
                          {flight.arrivalTime || "N/A"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        ) : (
          <p>none</p>
        )}
      </div>

      <div className="flex flex-wrap justify-center space-x-4 my-8">
        {/* Flight Schedule */}
        <div className="border border-gray-400 p-4 w-full md:w-1/2 mb-4">
          <h3 className="font-bold text-center">FLIGHT SCHEDULE</h3>
          <table className="w-full mt-2">
            <tbody>
              <tr>
                <td className="border-t border-gray-400 p-2">
                  Travel to Airport
                </td>
                <td className="border-t border-gray-400 p-2">
                  30 to 40 Minutes
                </td>
              </tr>
              <tr>
                <td className="border-t border-gray-400 p-2">
                  Arrive prior to departure
                </td>
                <td className="border-t border-gray-400 p-2">60 Minutes</td>
              </tr>
              <tr>
                <td className="border-t border-gray-400 p-2">
                  Flight duration
                </td>
                <td className="border-t border-gray-400 p-2">55 Minutes</td>
              </tr>
              <tr>
                <td className="border-t border-gray-400 p-2">
                  Airport to final destination
                </td>
                <td className="border-t border-gray-400 p-2">
                  35 to 45 Minutes
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="border-t border-gray-400 p-2 font-bold">
                  Total Duration
                </td>
                <td className="border-t border-gray-400 p-2 font-bold">
                  2 Hours 5 Minutes
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/* Travel Tips */}
        <div className="border border-gray-400 p-4 w-full md:w-1/2 mb-4">
          <h3 className="font-bold text-center">TRAVEL TIPS</h3>
          <ul className="list-disc list-inside mt-2">
            <li>Book your flight early to secure the best rates.</li>
            <li>Pack light to avoid extra baggage fees.</li>
            <li>Ensure you have all necessary travel documents.</li>
            <li>Arrive at the airport at least 2 hours before your flight.</li>
            <li>Check for any travel advisories or restrictions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
