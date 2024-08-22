import { db } from "./firebase"; // Adjust import based on your file structure
import { collection, addDoc } from "firebase/firestore";

const addMultipleFlightsData = async () => {
  try {
    const flightsData = [
      {
        serviceType: "Standard",
        tripType: "One Way",
        date: "2024-09-01",
        fromCity: "Sydney",
        toCity: "Canberra",
        availableFlights: [
          {
            flightNumber: "SJ101",
            departureTime: "08:00",
            arrivalTime: "09:00",
          },
          {
            flightNumber: "SJ102",
            departureTime: "10:30",
            arrivalTime: "11:30",
          },
          {
            flightNumber: "SJ103",
            departureTime: "13:00",
            arrivalTime: "14:00",
          },
          {
            flightNumber: "SJ104",
            departureTime: "15:45",
            arrivalTime: "16:45",
          },
        ],
      },
      {
        serviceType: "Premium",
        tripType: "Round Trip",
        date: "2024-09-05",
        fromCity: "Melbourne",
        toCity: "Brisbane",
        availableFlights: [
          {
            flightNumber: "SJ201",
            departureTime: "07:00",
            arrivalTime: "09:00",
          },
          {
            flightNumber: "SJ202",
            departureTime: "11:00",
            arrivalTime: "13:00",
          },
          {
            flightNumber: "SJ203",
            departureTime: "15:00",
            arrivalTime: "17:00",
          },
          {
            flightNumber: "SJ204",
            departureTime: "18:30",
            arrivalTime: "20:30",
          },
        ],
      },
      // Add more flight data objects here
    ];

    const flightsCollection = collection(db, "flights");

    for (const flightData of flightsData) {
      await addDoc(flightsCollection, flightData);
    }

    console.log("Multiple flights data added successfully!");
  } catch (e) {
    console.error("Error adding multiple flights data: ", e);
  }
};

export default addMultipleFlightsData;
