import { create } from "zustand";

interface SearchState {
  searchTerm: string;
  startDate: Date;
  endDate: Date;
  noOfGuests: number;
  setSearchTerm: (searchTerm: string) => void;
  setDates: (startDate: Date, endDate: Date) => void;
  incrementNoOfGuests: () => void;
  decrementNoOfGuests: () => void;
  resetSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchTerm: "",
  startDate: new Date(),
  endDate: new Date(),
  noOfGuests: 1,
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setDates: (startDate, endDate) => set({ startDate, endDate }),
  incrementNoOfGuests: () =>
    set((state) => ({ noOfGuests: state.noOfGuests + 1 })),
  decrementNoOfGuests: () =>
    set((state) => ({ noOfGuests: state.noOfGuests - 1 })),
  resetSearch: () =>
    set({
      searchTerm: "",
      startDate: new Date(),
      endDate: new Date(),
      noOfGuests: 1,
    }),
}));
