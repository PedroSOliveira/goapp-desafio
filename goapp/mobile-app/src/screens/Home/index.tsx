import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Logo } from "../../components/Logo";
import { UserCard } from "../../components/UserCard";

import { ServiceApiUsers } from "../../services/Users";

import { Container, Header, Main, Title, Subtitle } from "./styles";

interface UserData {
  id: any;
  nome: string;
  dataNascimento: string;
}

export const Home = () => {
  const [users, setUsers] = useState<UserData[]>([]);

  const navigation = useNavigation();

  const getDataAllUsers = useCallback(async () => {
    try {
      const responseData = await ServiceApiUsers.getAllUsers();
      const { data: users } = responseData;

      setUsers(users);
    } catch (error: any) {
      alert(error.message);
      console.error(error.stack);
    } finally {
    }
  }, []);

  const handleOpenPageUser = (id: any, username:string, birthDate: string) => {
    navigation.navigate("user", { id, username, birthDate });
  };

  useEffect(() => {
    getDataAllUsers();
  }, [users]);

  return (
    <Container>
      <Header>
        <Logo />
        <Title>Welcome</Title>
      </Header>
      <Main>
        <Subtitle>Users</Subtitle>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={users}
          style={{ flex: 1, width: "100%" }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <UserCard
              nome={item.nome}
              dataNascimento={item.dataNascimento}
              onPress={() => handleOpenPageUser(item.id, item.nome, item.dataNascimento)}
            />
          )}
        />
      </Main>
    </Container>
  );
};
