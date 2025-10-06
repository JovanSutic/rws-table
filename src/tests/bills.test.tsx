import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createMemoryHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { describe, it, expect, beforeEach } from "vitest";
import { http, HttpResponse } from "msw";
import { server } from "../mocks/node";
import { routeTree } from "../routeTree.gen";
import { billMocks, favoriteMocks } from "../mocks/data";
import { useFavoritesStore } from "../store/favorites";

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

  describe("Page main functionalities", () => {
    it("user see the bills data in the table", async () => {
      renderRoute();
      await waitFor(
        () => {
          expect(screen.getByText("Legislation bills")).toBeInTheDocument();
          expect(screen.getByText("Number")).toBeInTheDocument();
          expect(screen.getByText("132")).toBeInTheDocument();
          expect(screen.getByText("129")).toBeInTheDocument();
          expect(screen.getAllByText("Public").length).toBe(10);
          expect(screen.getAllByText("Defeated").length).toBe(10);
          expect(screen.getAllByText("Unknown Sponsor").length).toBe(10);
          expect(
            screen.queryByTestId("loading-table-container")
          ).not.toBeInTheDocument();
        },
        { timeout: 5000 }
      );
    });

    it("user should open a detail modal when a bill row is clicked", async () => {
      const user = userEvent.setup();
      renderRoute();
      await waitFor(() => {
        expect(screen.getByText("132")).toBeInTheDocument();
      });
      const billRowElement = screen.getByText("132");
      await user.click(billRowElement);

      await waitFor(() => {
        expect(
          screen.getByText(
            "Protection of the Public Interest from Tobacco Lobbying Bill 2013"
          )
        ).toBeInTheDocument();
      });
    });

    it("user is able to add and remove bills from favorites", async () => {
      const user = userEvent.setup();
      renderRoute();
      await waitFor(() => {
        expect(screen.getByTestId("icon-132-2013-add")).toBeInTheDocument();
      });
      const iconAddElement = screen.getByTestId("icon-132-2013-add");
      await user.click(iconAddElement);

      await waitFor(() => {
        expect(
          screen.getByText("Would you like to save bill 132 to your favorites?")
        ).toBeInTheDocument();
        expect(screen.getByText("Add to Favorites")).toBeInTheDocument();
        expect(
          screen.getByTestId("favorites-modal-cancel-btn")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("favorites-modal-confirm-btn")
        ).toBeInTheDocument();
      });

      const confirmBtn = screen.getByTestId("favorites-modal-confirm-btn");
      await user.click(confirmBtn);

      await waitFor(() => {
        expect(
          screen.getByText("Bill 132 saved to favorites successfully.")
        ).toBeInTheDocument();
        expect(screen.getByTestId("icon-132-2013-remove")).toBeInTheDocument();
      });

      const iconRemoveElement = screen.getByTestId("icon-132-2013-remove");
      await user.click(iconRemoveElement);

      await waitFor(() => {
        expect(
          screen.getByText(
            "Would you like to remove bill 132 from your favorites?"
          )
        ).toBeInTheDocument();
        expect(screen.getByText("Remove from Favorites")).toBeInTheDocument();
        expect(
          screen.getByTestId("favorites-modal-cancel-btn")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("favorites-modal-confirm-btn")
        ).toBeInTheDocument();
      });

      const confirmRemoveBtn = screen.getByTestId(
        "favorites-modal-confirm-btn"
      );
      await user.click(confirmRemoveBtn);

      await waitFor(() => {
        expect(
          screen.getByText("Bill 132 removed from favorites successfully.")
        ).toBeInTheDocument();
        expect(screen.getByTestId("icon-132-2013-add")).toBeInTheDocument();
      });
    });

    it("user is shown an error snack when API fails to add a favorite", async () => {
      server.use(
        http.post(
          `${import.meta.env.VITE_API_URL}/legislation/favorite/add`,
          () => {
            return HttpResponse.json(
              { error: "Internal Server Error" },
              { status: 500 }
            );
          }
        )
      );

      const user = userEvent.setup();
      renderRoute();

      await waitFor(() => {
        expect(screen.getByTestId("icon-132-2013-add")).toBeInTheDocument();
      });

      await user.click(screen.getByTestId("icon-132-2013-add"));

      await waitFor(() => {
        expect(screen.getByText("Add to Favorites")).toBeInTheDocument();
      });

      await user.click(screen.getByTestId("favorites-modal-confirm-btn"));

      await waitFor(
        () => {
          expect(
            screen.getByText("Failed to add favorite")
          ).toBeInTheDocument();
        },
        { timeout: 5000 }
      );
    });
  });
});

describe("Bills Route (/bills/favorites)", () => {
  beforeEach(() => {
    const favoritesMap = Object.fromEntries(
      favoriteMocks.results.map((bill) => [bill.id, true])
    );
    useFavoritesStore.setState({
      favorites: favoriteMocks.results,
      favoriteVersion: 1,
      favoritesMap: favoritesMap as Record<string, true>,
    });

    server.use(
      http.get(`${import.meta.env.VITE_API_URL}/legislation/favorite`, () => {
        return HttpResponse.json(favoriteMocks);
      })
    );
  });

  describe("Favorites page functionalities", () => {
    it("user can see their favorite bills", async () => {
      renderRoute("/bills/favorites");

      await waitFor(
        () => {
          expect(screen.getByText("Legislation bills")).toBeInTheDocument();
          expect(screen.getByText("129")).toBeInTheDocument();
          expect(screen.getByText("132")).toBeInTheDocument();
          expect(screen.getAllByText("Defeated").length).toBe(2);
          expect(screen.getAllByText("Unknown Sponsor").length).toBe(2);
          expect(
            screen.queryByTestId("loading-table-container")
          ).not.toBeInTheDocument();
          expect(
            screen.getByTestId("icon-132-2013-remove")
          ).toBeInTheDocument();
        },
        { timeout: 5000 }
      );
    });

    it("user can remove a bill from favorites", async () => {
      const user = userEvent.setup();
      renderRoute("/bills/favorites");

      await waitFor(
        () => {
          expect(screen.getByText("Legislation bills")).toBeInTheDocument();
          expect(screen.getByText("132")).toBeInTheDocument();
          expect(
            screen.getByTestId("icon-132-2013-remove")
          ).toBeInTheDocument();
        },
        { timeout: 5000 }
      );

      await user.click(screen.getByTestId("icon-132-2013-remove"));

      await waitFor(() => {
        expect(
          screen.getByText(
            "Would you like to remove bill 132 from your favorites?"
          )
        ).toBeInTheDocument();
        expect(screen.getByText("Remove from Favorites")).toBeInTheDocument();
        expect(
          screen.getByTestId("favorites-modal-cancel-btn")
        ).toBeInTheDocument();
        expect(
          screen.getByTestId("favorites-modal-confirm-btn")
        ).toBeInTheDocument();
      });

      const confirmRemoveBtn = screen.getByTestId(
        "favorites-modal-confirm-btn"
      );
      await user.click(confirmRemoveBtn);

      await waitFor(() => {
        expect(
          screen.getByText("Bill 132 removed from favorites successfully.")
        ).toBeInTheDocument();
        expect(screen.getAllByText("Defeated").length).toBe(1);
        expect(screen.getAllByText("Unknown Sponsor").length).toBe(1);
      });
    });
  });
});
