import { useStore } from "../store";
import { FormValuesType } from "./types";

const useEditTableForm = (id: number) => {
  const { editUser } = useStore();

  const onFinish = (values: FormValuesType) => {
    const { city, email, gender, name, phone, street } = values;

    const newValues = {
      name,
      email,
      gender,
      phone,
      address: {
        street,
        city,
      },
    };

    editUser(id, { id, ...newValues });
  };

  return { onFinish };
};

export default useEditTableForm;
