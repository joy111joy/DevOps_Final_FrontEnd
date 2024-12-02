import axios from "axios";

const API_URL = "http://localhost:8080/api/flights"; 

export const getAllFlights = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching flights:", error);
    throw error;
  }
};

export const addFlight = async (flightData) => {
  try {
    const response = await axios.post(API_URL, flightData);
    return response.data; 
  } catch (error) {
    console.error("Error adding flight:", error);
    throw error;
  }
};
export const updateFlight = async (flightNumber, updatedFlightData) => {
  try {
    const response = await axios.put(`${API_URL}/${flightNumber}`, updatedFlightData);
    return response.data;
  } catch (error) {
    console.error('Error updating flight:', error);
    throw error;
  }
};

export const deleteFlight = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`); 
    return response.data; 
  } catch (error) {
    console.error("Error deleting flight:", error);
    throw error;
  }
};
