import { create } from "zustand";
import { EditUserType, StateTypes, User } from "./types";
import axios from "axios";

const useStore = create<StateTypes>((set) => ({
  users: [],
  fetchUsers: () => {
    axios
      .get("http://localhost:3000/api/users")
      .then((response) => {
        set({ users: response.data as User[] });
      })
      .catch((err) => console.log(err));
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
  editUser: (id: number, data: User) => {
    axios
      .put(`http://localhost:3000/api/users/${id}`, data)
      .then(() => {
        set((state) => ({
          users: state.users.map((user) => (user.id === id ? data : user)),
        }));
      })
      .catch((err) => console.log(err));
  },
}));

export default useStore;
