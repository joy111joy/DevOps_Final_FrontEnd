import axios from "axios";

const BASE_URL = "http://localhost:8080/api/airports";

export const getAllAirports = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
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


