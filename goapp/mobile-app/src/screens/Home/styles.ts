import {Text, View } from 'react-native';
import styled from 'styled-components';

import { Feather } from "@expo/vector-icons";

export const Container = styled(View)`  
    flex: 1;

    padding: 20px 0;

    align-items: flex-start;
    background: ${({ theme }) => theme.colors.gray_300};

`;

export const Header = styled(View)`
    padding: 10px 20px;
    width: 100%;

    background: ${({ theme }) => theme.colors.gray_300};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.pink};
    font-size: 28px;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.shape_100};
    font-size: 20px;
`;


export const Main = styled(View)`
    margin-top: 20px;
    width: 100%;
    flex: 1;
    padding: 10px 15px;

    background: ${({ theme }) => theme.colors.gray_200};
`;

export const IconTitle = styled(Feather)`
    color: ${({ theme }) => theme.colors.green};
    font-size: 50px;
`;


export const Subtitle = styled(Text)`
    margin: 15px 0;
    color: ${({ theme }) => theme.colors.title};
    font-size: 25px;
`;

export const Footer = styled(View)`
    margin-top: 30px;
    flex-direction: row;
    align-items: center;
`;
