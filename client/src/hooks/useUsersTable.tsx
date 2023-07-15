import { useEffect } from "react";
import { useStore } from "../store";

const useUsersTable = () => {
  const { fetchUsers, users, removeUser } = useStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, removeUser };
};

export default useUsersTable;
