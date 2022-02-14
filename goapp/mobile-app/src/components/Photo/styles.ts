import { ScrollView, Text, Image, View } from 'react-native';
import styled, { css } from 'styled-components';

export const Imagem = styled(Image)`
    width: 120px;
    height: 120px;
    border-radius: 60px;
`;

export const Placeholder = styled(View)`
    width: 120px;
    height: 120px;
    border-radius: 60px;

    justify-content: center;
    align-items: center;

    border: 1px dashed ${({theme }) => theme.colors.title};
`;

export const PlaceholderTitle = styled(Text)`
   font-size: 14px;
   text-align: center;

   ${({theme }) => css`color: ${theme.colors.title}`};
`;

