import { Button, Form, Input, Modal, Select } from "antd";
import { FC } from "react";
import { EditTableFormProps } from "./types";
import { useEditTableForm } from "../../hooks";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EditTableForm: FC<EditTableFormProps> = ({ form, id }) => {
  const { onFinish } = useEditTableForm(id as number);
  return (
    <div>
      <Form
        style={{ marginTop: "30px" }}
        onFinish={onFinish}
        {...layout}
        form={form}
      >
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            allowClear
          >
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="female">female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="city" label="city" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="street" label="Street" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditTableForm;
