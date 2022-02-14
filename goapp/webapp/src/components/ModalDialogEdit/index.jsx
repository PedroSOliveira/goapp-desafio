import { useCallback, useState } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ServiceApiUsers } from "../../services/Users";

import "./styles.scss";

export const ModalEditUser = ({
  isOpen,
  onRequestClose,
  user,
  getDataAllUsers,
}) => {
  const [name, setName] = useState(user.nome);
  const [birthDate, setBirthDate] = useState(user.dataNascimento);

  const handleUpdateUser = useCallback(async (id, name, birthDate) => {
    if (name && birthDate) {
      try {
        const responseData = await ServiceApiUsers.editUser({
          id,
          nome: name,
          dataNascimento: birthDate,
        });

        // const { message } = responseData.data;
        
        toast.success("User edited!!");
        onRequestClose();
        getDataAllUsers();
      } catch (error) {
        toast.error(error.message);
        console.log(error.stack);
      }
    } else {
      toast.warning("Empty fields!!");
    }
  }, []);

  const footerModalEdit = (
    <>
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-text"
        onClick={onRequestClose}
      />
      <Button
        label="Save"
        icon="pi pi-check"
        className="p-button-text"
        onClick={() => handleUpdateUser(user.id, name, birthDate)}
      />
    </>
  );

  return (
    <Dialog
      visible={isOpen}
      style={{ width: "450px" }}
      header="Update User"
      className="p-fluid"
      footer={footerModalEdit}
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
      <div className="content-image">
        <img
          src={{ url: "https://avatars.githubusercontent.com/u/37816505?v=4" }}
          onError={(e) =>
            (e.target.src =
              "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
          }
          alt="Image user"
          className="product-image block m-auto pb-3"
        />
      </div>

      <div className="field">
        <label htmlFor="name">Name</label>
        <InputText
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoFocus
          placeholder="Name"
        />
      </div>
      <div className="field">
        <label htmlFor="birthDate">Birth Date</label>
        <InputMask
          placeholder="Birth Date"
          mask="9999-99-99"
          slotChar="mm/dd/yyyy"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        ></InputMask>
      </div>
    </Dialog>
  );
};
