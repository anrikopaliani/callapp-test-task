import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useModalForm } from "../../hooks";
import { ModalFormProps } from "./types";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ModalForm: React.FC<ModalFormProps> = () => {
  const { form, onFinish, onReset } = useModalForm();

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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
            pattern: /^+?(\d{3})?\d+$/,
            message: "type correct phone number format",
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
          <Option value="male">male</Option>
          <Option value="female">female</Option>
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
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ModalForm;
