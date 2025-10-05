import { delay, http, HttpResponse } from "msw";
import { billMocks } from "./data";

const isTestEnvironment = import.meta.env.MODE === "test";

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/legislation`, async () => {
    try {
      if (!isTestEnvironment) {
        await delay(700);
      }
      return HttpResponse.json(billMocks);
    } catch (error) {
      console.error("Failed to parse request:", error);
      return HttpResponse.json(
        { error: "Invalid JSON payload." },
        { status: 400 }
      );
    }
  }),
];
