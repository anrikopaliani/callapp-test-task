import { create } from "zustand";
import { StateTypes, User } from "./types";
import axios from "axios";

const useStore = create<StateTypes>((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await axios.get("http://localhost:3000/api/users");
    set({ users: response.data as User[] });
  },
}));

export default useStore;
