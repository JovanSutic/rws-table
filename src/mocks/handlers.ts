import { http, HttpResponse } from "msw";
import { billMocks } from "./data";

export const handlers = [
  http.get("https://api.oireachtas.ie/v1/legislation", async () => {
    try {
    //   await delay(700);
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
