import { create } from "zustand";
import { StateTypes, User } from "./types";
import axios from "axios";

const useStore = create<StateTypes>((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await axios.get("http://localhost:3000/api/users");
    set({ users: response.data as User[] });
  },
  addUser: async (data: User) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        data
      );
      set((state) => ({
        users: [...state.users, response.data],
      }));
    } catch (err) {
      console.log(err);
    }
  },
}));

export default useStore;
