import axios from "axios";

const BASE_URL = "http://localhost:8080/api/aircrafts";

export const getAllAircraft = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log("API response:", response.data); 
    return response.data;
  } catch (error) {
    console.error("Error fetching aircrafts:", error);
    throw error;
  }
};

export const addAircraft = async (aircraftData) => {
  const response = await axios.post(BASE_URL, aircraftData);
  return response.data;
};

export const updateAircraft = async (aircraftData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${aircraftData.id}`, aircraftData);
    return response.data;
  } catch (error) {
    console.error("Error updating aircraft:", error);
    throw error;
  }
};

export const deleteAircraft = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting aircraft:", error);
    throw new Error("Could not delete aircraft.");
  }};
