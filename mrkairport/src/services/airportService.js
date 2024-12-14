import axios from "axios";

const API_URL = "http://localhost:8080/api/airports";
const BASE_URL = "http://localhost:8080/api/airports";

export const getAllAirports = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching airports:", error);
    throw error;
  }
};

export const addAirport = async (airportData) => {
  try {
    const response = await axios.post(`${API_URL}`, airportData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error adding airport:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updateAirport = async (airportCode, updatedAirportData) => {
  try {
    const response = await axios.put(
      `${API_URL}/${airportCode}`,
      updatedAirportData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating airport:", error);
    throw error;
  }
};

export const deleteAirport = async (iataCode) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/airports/${iataCode}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete airport");
    }

    console.log("Airport deleted successfully");
  } catch (error) {
    console.error("Error deleting airport:", error.message);
    throw error;
  }
};

export const getAirportDetails = async (iataCode) => {
  const response = await axios.get(`${BASE_URL}/${iataCode}`);
  return response.data;
};

export const getDeparturesByAirport = async (iataCode) => {
  const response = await axios.get(`${BASE_URL}/${iataCode}/departures`);
  return response.data;
};

export const getArrivalsByAirport = async (iataCode) => {
  const response = await axios.get(`${BASE_URL}/${iataCode}/arrivals`);
  return response.data;
};
