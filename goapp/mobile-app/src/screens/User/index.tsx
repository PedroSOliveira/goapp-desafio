import React, { useState, useCallback } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import { UserNavigationProps } from "../../@types/navigation";

import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { Photo } from "../../components/Photo";

import { ServiceApiUsers } from "../../services/Users";

import {
  Container,
  ContentHeader,
  Header,
  Title,
  Form,
  Fields,
  Upload,
  Icon,
  DeleteButton,
} from "./styles";

interface UserData {
  nome: string;
  dataNascimento: string;
}

export const User = () => {
  const route = useRoute();

  const { id, username, birthDate } = route.params as UserNavigationProps;

  const [imageSelect, setImageSelect] = useState("");
  const [nome, setNome] = useState(username);
  const [dataNascimento, setDataNascimento] = useState(birthDate);

  const navigation = useNavigation();

  const handleDeleteUser = useCallback(async (id) => {
    try {
      const responseData = await ServiceApiUsers.deleteUser(id);
      // const { message } = responseData.data;
      console.log(responseData);
      alert("User deleted!!");
      navigation.navigate("home");
    } catch (error: any) {
      console.error(error.stack);
    }
  }, []);

  const handleUpdateUser = useCallback(async (id, nome, dataNascimento) => {
    if (nome && dataNascimento) {
      try {
        const responseData = await ServiceApiUsers.editUser({
          id,
          nome,
          dataNascimento,
        });

        console.log(responseData);
        alert("User updated!!");
        navigation.navigate("home");
      } catch (error: any) {
        console.log(error.stack);
      }
    } else {
      alert("Empty Fields!!");
    }
  }, []);

  return (
    <Container>
      <Header>
        <ContentHeader>
          <Icon onPress={() => navigation.navigate("home")} name="arrow-left" />
          <Title> User</Title>
        </ContentHeader>
      </Header>

      <Form>
        <Upload>
          <Photo uri={imageSelect} />
        </Upload>
        <Fields>
          <Input
            placeholder="Name"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <Input
            placeholder="Birth Date"
            value={dataNascimento}
            onChangeText={(text) => setDataNascimento(text)}
          />
          <Button
            title="Save"
            onPress={() => handleUpdateUser(id, nome, dataNascimento)}
          />
        </Fields>

        <DeleteButton title="Delete" onPress={() => handleDeleteUser({ id })} />
      </Form>
    </Container>
  );
};
