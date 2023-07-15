import { useEffect, useState } from "react";
import { useStore } from "../store";
import { Form } from "antd";
import { User } from "../store/types";

const useUsersTable = () => {
  const [form] = Form.useForm();

  const [editModal, setEditModal] = useState(false);
  const [editID, setEditID] = useState<number | undefined>(undefined);
  const { fetchUsers, users, removeUser } = useStore();

  useEffect(() => {
    fetchUsers();
  }, []);

  const showEditModal = (data: User) => {
    setEditModal(true);

    const { name, phone, email, gender, id } = data;
    const { city, street } = data.address;

    const newData = {
      city,
      street,
      name,
      phone,
      email,
      gender,
    };
    if (id) {
      setEditID(id);
    }

    form.setFieldsValue(newData);
  };

  const handleCancel = () => {
    setEditModal(false);
  };

  return {
    form,
    users,
    removeUser,
    editModal,
    handleCancel,
    showEditModal,
    editID,
  };
};

export default useUsersTable;
