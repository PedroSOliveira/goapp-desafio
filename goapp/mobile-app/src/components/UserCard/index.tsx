import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import {
  Container,
  Content,
  Title,
  Photo,
  TextDate,
  Icon,
  ContentDate,
} from "./styles";

// export type UserData = {
//   nome: string;
//   dataNascimento: string;
// };

type Props = RectButtonProps & {
  nome: string;
  dataNascimento: string;
};

export const UserCard = ({ nome, dataNascimento, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Photo
        source={{
          uri: "https://avatars.githubusercontent.com/u/37816505?v=4",
        }}
      />

      <Content>
        <Title>{nome}</Title>
        <ContentDate>
          <Icon name="calendar" />
          <TextDate>{dataNascimento}</TextDate>
        </ContentDate>
      </Content>
    </Container>
  );
};
