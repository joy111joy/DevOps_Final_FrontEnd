import axios from "axios";

const API_URL = "http://localhost:8080/api/aircrafts";

export const getAllAircraft = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching aircraft:", error);
    throw error;
  }
};

export const addAircraft = async (aircraftData) => {
  try {
    const response = await axios.post(API_URL, aircraftData);
    return response.data;
  } catch (error) {
    console.error("Error adding aircraft:", error);
    throw error;
  }
};

export const updateAircraft = async (aircraftId, updatedAircraftData) => {
  try {
    const response = await axios.put(`${API_URL}/${aircraftId}`, updatedAircraftData);
    return response.data;
  } catch (error) {
    console.error('Error updating aircraft:', error);
    throw error;
  }
};

export const deleteAircraft = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting aircraft:", error);
    throw error;
  }
};