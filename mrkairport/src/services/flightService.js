import axios from "axios";

const API_URL = "http://localhost:8081/api/flights";

export const getAllFlights = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw new Error("Could not fetch flights.");
  }
};

export const addFlight = async (flightData) => {
  try {
    const response = await axios.post(API_URL, flightData);
    return response.data;
  } catch (error) {
    console.error("Error adding flight:", error);
    throw new Error("Could not add flight.");
  }
};

export const updateFlight = async (flightNumber, updatedFlightData) => {
  try {
    const response = await axios.put(
      `${API_URL}/${flightNumber}`,
      updatedFlightData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating flight:", error);
    throw new Error("Could not update flight.");
  }
};

export const deleteFlight = async (flightNumber) => {
  try {
    await axios.delete(`${API_URL}/${flightNumber}`);
  } catch (error) {
    console.error("Error deleting flight:", error);
    throw new Error("Could not delete flight.");
  }
};
