import axios from "axios";
import { sendNotification } from "./notificationService";

jest.mock("axios");

describe("Notification Service", () => {
  it("should send a notification successfully", async () => {
    const mockResponse = { data: "Notification sent successfully" };
    axios.post.mockResolvedValue(mockResponse);

    const notificationData = {
      flightNumber: "123",
      message: "Test notification",
      type: "email",
    };
    const response = await sendNotification(notificationData);

    expect(response).toEqual("Notification sent successfully");
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:8081/api/notifications",
      notificationData
    );
  });

  it("should handle errors when sending a notification", async () => {
    const mockError = new Error("Network Error");
    axios.post.mockRejectedValue(mockError);

    await expect(sendNotification({})).rejects.toThrow(
      "Failed to send notification"
    );
  });
});
