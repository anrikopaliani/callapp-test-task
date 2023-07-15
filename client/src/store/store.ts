import { create } from "zustand";
import { StateTypes, User } from "./types";
import axios from "axios";

const useStore = create<StateTypes>((set) => ({
  users: [],
  fetchUsers: async () => {
    const response = await axios.get("http://localhost:3000/api/users");
    set({ users: response.data as User[] });
  },
  addUser: (data: User) => {
    axios
      .post("http://localhost:3000/api/users", data)
      .then((response) => {
        set((state) => ({
          users: [...state.users, response.data],
        }));
      })
      .catch((err) => console.log(err));
  },
  removeUser: (id: number) => {
    axios
      .delete(`http://localhost:3000/api/users/${id}`)
      .then(() => {
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        }));
      })
      .catch((err) => console.log(err));
  },
}));

export default useStore;
