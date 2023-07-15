import { useEffect } from "react";
import { useStore } from "../store";

const useUsersTable = () => {
  const { fetchUsers, users, removeUser } = useStore();

  useEffect(() => {
    fetchUsers()
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
  }, []);

  return { users, removeUser };
};

export default useUsersTable;
