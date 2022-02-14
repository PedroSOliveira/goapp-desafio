import React, { useState, useCallback } from "react";

import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { Photo } from "../../components/Photo";

import { useNavigation } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";

import { ServiceApiUsers } from "../../services/Users";

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  Upload,
  PickImageButton,
  InputDate,
} from "./styles";

interface UserData {
  nome: string;
  dataNascimento: string;
}

export const Register = () => {
  const [imageSelect, setImageSelect] = useState("");
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const navigation = useNavigation();

  const handlePickerImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });

      if (!result.cancelled) {
        setImageSelect(result.uri);
      }
    }
  };

  const handleAddNewUser = useCallback(
    async ({ nome, dataNascimento }: UserData) => {
      if (nome && dataNascimento) {
        try {
          const responseData = await ServiceApiUsers.createUser({
            nome,
            dataNascimento,
          });

          navigation.navigate("home");
          alert("User created!!");
        } catch (error: any) {
          alert(error.message);
          console.log(error.stack);
        } finally {
          setNome("");
          setDataNascimento("");
        }
      } else {
        alert("Empty fields!!");
      }
    },
    []
  );

  return (
    <Container>
      <Header>
        <Title>Register User</Title>
      </Header>

      <Form>
        <Upload>
          <Photo uri={imageSelect} />
          <PickImageButton title="Upload" onPress={handlePickerImage} />
        </Upload>

        <Fields>
          <Input
            placeholder="Name"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
          <InputDate
            placeholderTextColor="#999591"
            placeholder="Birth Date - yyyy-dd-mm"
            value={dataNascimento}
            onChangeText={(text) => setDataNascimento(text)}
            mask={[/\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, "-", /\d/, /\d/]}
          />
        </Fields>

        <Button
          title="Register"
          onPress={() => handleAddNewUser({ nome, dataNascimento })}
        />
      </Form>
    </Container>
  );
};
