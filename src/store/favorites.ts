import { create } from "zustand";
import type { BillInternal } from "../api/bill.types";

interface FavoritesStoreState {
  favorites: BillInternal[];
  favoritesMap: Record<string, true>;
  favoriteVersion: number;
  addFavorite: (favorite: BillInternal) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesStoreState>((set, get) => ({
  favorites: [],
  favoritesMap: {},
  favoriteVersion: 0,

  addFavorite: (favorite: BillInternal) =>
    set((state) => ({
      favorites: [...state.favorites, favorite],
      favoritesMap: { ...state.favoritesMap, [favorite.id]: true },
      favoriteVersion: state.favoriteVersion + 1,
    })),
    
  removeFavorite: (id: string) =>
    set((state) => {
      const newMap = { ...state.favoritesMap };
      delete newMap[id];
      return {
        favorites: state.favorites.filter((bill) => bill.id !== id),
        favoritesMap: newMap,
        favoriteVersion: state.favoriteVersion + 1,
      };
    }),

  isFavorite: (id: string) => get().favoritesMap[id] === true,
}));
