// flightService.js
import axios from 'axios';

export const getAllFlights = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/flights');  // API endpoint
    return response.data;  // Returns all the flight data from the API
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;  // Rethrow the error for the caller to handle
  }
};
