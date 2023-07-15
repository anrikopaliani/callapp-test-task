import { Form } from "antd";
import { useStore } from "../store";
import { FormValuesType, SubmitFormType } from "./types";

const useModalForm = () => {
  const [form] = Form.useForm();
  const store = useStore();

  const onFinish = (values: FormValuesType) => {
    const { city, street, name, phone, email, gender } = values;
    const newObjValues: SubmitFormType = {
      name,
      phone,
      email,
      gender,
      address: {
        city,
        street,
      },
    };

    store.addUser(newObjValues).catch((err) => console.log(err));
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };

  return { form, onFinish, onReset };
};

export default useModalForm;
