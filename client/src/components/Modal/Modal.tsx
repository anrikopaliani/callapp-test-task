import { Button, Modal } from "antd";
import styles from "./modal.module.css";
import { useState } from "react";
import { ModalForm } from "../ModalForm";

const AddUsersModal = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <div className={styles.modalContainer}>
      <Button type="primary" onClick={showModal}>
        Add user
      </Button>
      <Modal
        footer={null}
        title="Create new user"
        onCancel={handleCancel}
        open={open}
      >
        <ModalForm closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default AddUsersModal;
