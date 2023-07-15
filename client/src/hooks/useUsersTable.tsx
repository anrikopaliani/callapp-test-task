import { useEffect } from "react";
import { useStore } from "../store";

const useUsersTable = () => {
  const { fetchUsers, users } = useStore();

  useEffect(() => {
    fetchUsers()
      .then(() => console.log("success"))
      .catch((err) => console.log(err));
  }, []);

  return { users };
};

export default useUsersTable;
