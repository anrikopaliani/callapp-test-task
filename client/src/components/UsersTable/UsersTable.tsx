import { FC } from "react";
import { Button, Modal, Table } from "antd";

import Column from "antd/es/table/Column";
import { useUsersTable } from "../../hooks";
import { User } from "../../store/types";
import { EditTableForm } from "../EditTableForm";

const UsersTable: FC = () => {
  const {
    users,
    removeUser,
    editModal,
    showEditModal,
    handleCancel,
    form,
    editID,
  } = useUsersTable();

  if (users.length <= 0) return null;

  return (
    <>
      <Table
        onRow={(record) => {
          return {
            onDoubleClick: () => showEditModal(record),
          };
        }}
        dataSource={users}
        rowKey="id"
      >
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
        <Column
          title="Actions"
          render={(data: User) => (
            <>
              <Button onClick={() => removeUser(data.id)} danger>
                Delete
              </Button>
            </>
          )}
        />
      </Table>
      <Modal open={editModal} onCancel={handleCancel} footer={null}>
        <EditTableForm id={editID} form={form} />
      </Modal>
    </>
  );
};

export default UsersTable;
