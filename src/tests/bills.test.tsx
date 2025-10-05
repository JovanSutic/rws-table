import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
// import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "../mocks/node";
import { routeTree } from "../routeTree.gen";
// import type { BillInternal } from "../api/bill.types";
import { billMocks } from "../mocks/data";

vi.mock("@tanstack/react-virtual", () => ({
  useVirtualizer: ({ count }: { count: number }) => ({
    getTotalSize: () => count * 53,
    getVirtualItems: () =>
      Array.from({ length: count }, (_, i) => ({
        key: i,
        index: i,
        start: i * 53,
        size: 53,
      })),
  }),
}));

function createTestRouter(initialPath = "/bills/all") {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
      },
    },
  });

  const memoryHistory = createMemoryHistory({
    initialEntries: [initialPath],
  });

  const router = createRouter({
    routeTree,
    history: memoryHistory,
    context: {
      queryClient,
    },
  });

  return { router, queryClient };
}

function renderRoute(initialPath = "/bills/all") {
  const { router, queryClient } = createTestRouter(initialPath);

  const result = render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );

  return { ...result, router, queryClient };
}

describe("Bills Route (/bills/all)", () => {
  beforeEach(() => {
    server.use(
      http.get(`${import.meta.env.VITE_API_URL}/legislation`, () => {
        return HttpResponse.json(billMocks);
      })
    );
  });

  describe("Initial Render", () => {
    it("renders the bills table with data", async () => {
      renderRoute();

      await waitFor(
        () => {
          expect(screen.getByText("Legislation bills")).toBeInTheDocument();
        },
        { timeout: 5000 }
      );

      await waitFor(
        () => {
          expect(
            screen.queryByTestId("loading-table-container")
          ).not.toBeInTheDocument();
        },
        { timeout: 5000 }
      );

      // screen.debug(undefined, Infinity);

      expect(screen.getByText("Legislation bills")).toBeInTheDocument();
    });
  });
  //   it("returns filtered results when status is provided", async () => {

  //     server.use(
  //       http.get("*/api/bills", ({ request }) => {
  //         const url = new URL(request.url);
  //         const status = url.searchParams.get("status");

  //         if (status === "Passed") {
  //           return HttpResponse.json(filteredData);
  //         }

  //         return HttpResponse.json(billMocks);
  //       })
  //     );

  //     const user = userEvent.setup();
  //     renderRoute();

  //     await waitFor(() => {
  //       expect(screen.getByText("John Doe")).toBeInTheDocument();
  //     });

  //     const statusSelect = screen.getByLabelText("Bill status");
  //     await user.click(statusSelect);

  //     const passedOption = screen.getByRole("option", { name: "Passed" });
  //     await user.click(passedOption);

  //     await waitFor(() => {
  //       expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  //       expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
  //     });
  //   });
  // });
});
