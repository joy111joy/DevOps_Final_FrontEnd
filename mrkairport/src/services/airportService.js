import axios from "axios";

const API_URL = "http://localhost:8080/api/airports";

export const getAllAirports = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching airports:", error);
    throw error;
  }
};

export const addAirport = async (airportData) => {
  try {
    const response = await axios.post(API_URL, airportData);
    return response.data;
  } catch (error) {
    console.error("Error adding airport:", error);
    throw error;
  }
};

export const updateAirport = async (airportCode, updatedAirportData) => {
  try {
    const response = await axios.put(`${API_URL}/${airportCode}`, updatedAirportData);
    return response.data;
  } catch (error) {
    console.error('Error updating airport:', error);
    throw error;
  }
};

export const deleteAirport = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting airport:", error);
    throw error;
  }
};