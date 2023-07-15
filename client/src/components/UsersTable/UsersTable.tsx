import { FC } from "react";
import { Table } from "antd";

import Column from "antd/es/table/Column";
import { useUsersTable } from "../../hooks";

const UsersTable: FC = () => {
  const { users } = useUsersTable();

  if (users.length <= 0) return null;

  return (
    <Table dataSource={users} rowKey="id">
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="Gender" dataIndex="gender" key="gender" />
      <Column
        title="Address"
        dataIndex="address"
        key="adress"
        render={(address: { city: string; street: string }) => (
          <p>
            {address.city}, {address.street}
          </p>
        )}
      />
      <Column title="Phone" dataIndex="phone" key="phone" />
    </Table>
  );
};

export default UsersTable;
