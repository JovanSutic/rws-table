import { delay, http, HttpResponse } from "msw";
import { billMocks } from "./data";

const isTestEnvironment = import.meta.env.MODE === "test";
const isAllMocks = import.meta.env.VITE_MOCKS_HANDLING === "true";
const isFullMock = isTestEnvironment || isAllMocks;

export const handlers = isFullMock
  ? [
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

      http.get(
        `${import.meta.env.VITE_API_URL}/legislation/favorite`,
        async (bills) => {
          try {
            if (!isTestEnvironment) {
              await delay(700);
            }
            return HttpResponse.json(bills);
          } catch (error) {
            console.error("Failed to parse request:", error);
            return HttpResponse.json(
              { error: "Invalid JSON payload." },
              { status: 400 }
            );
          }
        }
      ),

      http.post(
        `${import.meta.env.VITE_API_URL}/legislation/favorite/add`,
        async ({ request }) => {
          try {
            const bill = await request.json();

            if (!isTestEnvironment) {
              await delay(700);
            }

            return HttpResponse.json(bill, { status: 201 });
          } catch (error) {
            console.error("Failed to parse request:", error);
            return HttpResponse.json(
              { error: "Invalid JSON payload." },
              { status: 400 }
            );
          }
        }
      ),
      http.post(
        `${import.meta.env.VITE_API_URL}/legislation/favorite/remove`,
        async ({ request }) => {
          try {
            const bill = await request.json();

            if (!isTestEnvironment) {
              await delay(700);
            }

            return HttpResponse.json(bill, { status: 201 });
          } catch (error) {
            console.error("Failed to parse request:", error);
            return HttpResponse.json(
              { error: "Invalid JSON payload." },
              { status: 400 }
            );
          }
        }
      ),
    ]
  : [
      http.get(
        `${import.meta.env.VITE_API_URL}/legislation/favorite`,
        async (bills) => {
          try {
            if (!isTestEnvironment) {
              await delay(700);
            }
            return HttpResponse.json(bills);
          } catch (error) {
            console.error("Failed to parse request:", error);
            return HttpResponse.json(
              { error: "Invalid JSON payload." },
              { status: 400 }
            );
          }
        }
      ),

      http.post(
        `${import.meta.env.VITE_API_URL}/legislation/favorite/add`,
        async ({ request }) => {
          try {
            const bill = await request.json();

            if (!isTestEnvironment) {
              await delay(700);
            }

            return HttpResponse.json(bill, { status: 201 });
          } catch (error) {
            console.error("Failed to parse request:", error);
            return HttpResponse.json(
              { error: "Invalid JSON payload." },
              { status: 400 }
            );
          }
        }
      ),
      http.post(
        `${import.meta.env.VITE_API_URL}/legislation/favorite/remove`,
        async ({ request }) => {
          try {
            const bill = await request.json();

            if (!isTestEnvironment) {
              await delay(700);
            }

            return HttpResponse.json(bill, { status: 201 });
          } catch (error) {
            console.error("Failed to parse request:", error);
            return HttpResponse.json(
              { error: "Invalid JSON payload." },
              { status: 400 }
            );
          }
        }
      ),
    ];
