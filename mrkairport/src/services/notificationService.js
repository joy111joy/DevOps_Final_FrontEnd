import axios from "axios";

const API_URL = "http://localhost:8080/api/notifications";

export const sendNotification = async (notification) => {
  try {
    const response = await axios.post(API_URL, notification);
    return response.data;
  } catch (error) {
    console.error("Error sending notification:", error);
    throw new Error("Failed to send notification");
  }
};

export const subscribeToFlightUpdates = async (subscriptionData) => {
  try {
    const response = await axios.post(
      `${API_URL}/subscribe`,
      subscriptionData,
      {
        timeout: 5000, // 5 seconds timeout
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error subscribing to updates:", error);
    throw new Error("Failed to subscribe to updates");
  }
};
