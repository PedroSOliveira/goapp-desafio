import { useCallback } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { ServiceApiUsers } from "../../services/Users";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.scss";

export const ModalDeleteUser = ({
  user,
  isOpen,
  onRequestClose,
  getDataAllUsers,
}) => {
  
  const handleDeleteUser = useCallback(async (id) => {
    try {
      const responseData = await ServiceApiUsers.deleteUser(id);
      // const { message } = responseData.data;
      toast.success("User deleted!!");

      onRequestClose();
      getDataAllUsers();
    } catch (error) {
      toast.error(error.message);
      console.error(error.stack);
    }
  }, []);

  const footerModalDelete = (
    <>
      <Button
        label="No"
        icon="pi pi-times"
        className="p-button-text"
        onClick={onRequestClose}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        className="p-button-text"
        onClick={() => handleDeleteUser(user.id)}
      />
    </>
  );

  return (
    <Dialog
      visible={isOpen}
      style={{ width: "450px" }}
      header="Confirm Delete"
      modal
      footer={footerModalDelete}
      onHide={onRequestClose}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="confirmation-content">
        <i className="pi pi-exclamation-triangle mr-3" />
        <span>Are you sure you want to delete {user.nome}?</span>
      </div>
    </Dialog>
  );
};
