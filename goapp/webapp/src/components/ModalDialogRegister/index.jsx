import { useCallback, useState } from "react";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { FileUpload } from "primereact/fileupload";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ServiceApiUsers } from "../../services/Users";

import "./styles.scss";

export const ModalRegisterUser = ({
  isOpen,
  onRequestClose,
  getDataAllUsers,
}) => {
  const [name, setName] = useState("");
  const [birthDate, setDataNascimento] = useState("");

  const handleAddNewUser = useCallback(async (name, birthDate) => {
    if (name && birthDate) {
      try {
        const responseData = await ServiceApiUsers.createUser({
          nome: name,
          dataNascimento: birthDate,
        });

        console.log(responseData);
        toast.success("User created!!");

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

  const footerModalRegister = (
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
        onClick={() => handleAddNewUser(name, birthDate)}
      />
    </>
  );

  return (
    <Dialog
      visible={isOpen}
      style={{ width: "450px" }}
      header="Register User"
      className="p-fluid"
      footer={footerModalRegister}
      onHide={onRequestClose}
    >
      <div className="content-image">
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

        <h3>Photo</h3>
        <FileUpload
          className="file-upload"
          name="demo[]"
          url="https://primefaces.org/primereact/showcase/upload.php"
          multiple={false}
          accept="image/*"
          maxFileSize={1000000}
          emptyTemplate={
            <p className="m-0">Drag and drop files to here to upload.</p>
          }
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
          slotChar="yyyy/dd/mm"
          value={birthDate}
          onChange={(e) => setDataNascimento(e.target.value)}
        ></InputMask>
      </div>
    </Dialog>
  );
};
