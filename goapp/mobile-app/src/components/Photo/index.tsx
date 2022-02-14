import React from "react";

import { Imagem, Placeholder, PlaceholderTitle } from "./styles";

type Props = {
  uri: string | null;
};

export const Photo = ({ uri }: Props) => {
  if (uri) {
    return <Imagem source={{ uri }} />;
  }

  return (  
  <Placeholder>
      <PlaceholderTitle>
          Nenhuma foto{'\n'} carregada
      </PlaceholderTitle>
  </Placeholder>)
};
