import React, { useEffect, useState, useCallback } from "react";
import { Menu } from "../../components/Menu";
import { ModalEditUser } from "../../components/ModalDialogEdit";
import { ModalRegisterUser } from "../../components/ModalDialogRegister";
import { ModalDeleteUser } from "../../components/ModalDialogDelete";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ServiceApiUsers } from "../../services/Users";

import "./styles.scss";

export const Home = () => {
  const emptyUser = {
    id: null,
    nome: "",
    dataNascimento: "",
  };

  const [isVisibleModalEditUser, setIsVisibleModalEditUser] = useState(false);
  const [isVisibleModalRegister, setIsVisibleModalRegister] = useState(false);
  const [isVisibleModalDelete, setIsVisibleModalDelete] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(emptyUser);
  const [loading, setLoading] = useState(false);

  const getDataAllUsers = useCallback(async () => {
    try {
      setLoading(true);

      const responseData = await ServiceApiUsers.getAllUsers();
      const { data: users } = responseData;

      setUsers(users);
    } catch (error) {
      alert(error.message);
      console.error(error.stack);
    } finally {
      setLoading(false);
    }
  }, []);

  const editUser = (user) => {
    setUser({ ...user });
    setIsVisibleModalEditUser(true);
  };

  const deleteUser = (user) => {
    setUser({ ...user });
    setIsVisibleModalDelete(true);
  };

  const header = (
    <div className="table-header">
      <h2 className="mx-0 my-1">Users</h2>
      <Button
        label="New"
        icon="pi pi-plus"
        className="p-button-help"
        onClick={() => setIsVisibleModalRegister(true)}
      />
    </div>
  );

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="table-actions">
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-help mr-2"
          onClick={() => editUser(rowData)}
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => deleteUser(rowData)}
        />
      </div>
    );
  };

  useEffect(() => {
    getDataAllUsers();
  }, []);

  return (
    <div className="home">
      <Menu />
      <DataTable
        loading={loading}
        value={users}
        dataKey="id"
        paginator
        rows={5}
        header={header}
        responsiveLayout="scroll"
      >
        <Column
          selectionMode="multiple"
          headerStyle={{ width: "3rem" }}
          exportable={false}
        ></Column>
        <Column
          field="id"
          header="Code"
          sortable
          style={{ minWidth: "1rem" }}
        ></Column>
        <Column
          field="nome"
          header="Name"
          sortable
          style={{ minWidth: "2rem" }}
        ></Column>

        <Column
          field="dataNascimento"
          header="Birth Date"
          sortable
          style={{ minWidth: "2rem" }}
        ></Column>

        <Column
          body={actionBodyTemplate}
          exportable={false}
          style={{ minWidth: "8rem" }}
        ></Column>
      </DataTable>

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

      {isVisibleModalEditUser && (
        <ModalEditUser
          getDataAllUsers={getDataAllUsers}
          user={user}
          isOpen={isVisibleModalEditUser}
          onRequestClose={() => setIsVisibleModalEditUser(false)}
        />
      )}

      {isVisibleModalRegister && (
        <ModalRegisterUser
          isOpen={isVisibleModalRegister}
          onRequestClose={() => setIsVisibleModalRegister(false)}
          getDataAllUsers={getDataAllUsers}
        />
      )}

      {isVisibleModalDelete && (
        <ModalDeleteUser
          getDataAllUsers={getDataAllUsers}
          user={user}
          isOpen={isVisibleModalDelete}
          onRequestClose={() => setIsVisibleModalDelete(false)}
        />
      )}
    </div>
  );
};
