import { Feather } from '@expo/vector-icons';
import { Image, ScrollView, Text, View } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components';

export const Container = styled(RectButton)`
    background: ${({ theme }) => theme.colors.gray_100};
    border-radius: 15px;

    flex-direction: row;
    padding: 17px 24px;

    margin-bottom: 20px;
   
`;

export const Content = styled(View)`
    /* background: ${({ theme }) => theme.colors.gray_200};
    border-radius: 5px;
    marg
    padding: 17px 24px;

    margin-bottom: 20px; */

    margin-left: 20px;
   
`;

export const ContentDate = styled(View)`
    /* background: ${({ theme }) => theme.colors.gray_200};
    border-radius: 5px;
    marg
    padding: 17px 24px;

    margin-bottom: 20px; */

    flex-direction: row;
    align-items: center;
    margin-top: 10px;

`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.pink};
    font-size: 15px;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.title};
    font-size: 25px;
`;

export const TextDate = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;

    margin-left: 10px;
`;

export const Point = styled(Text)`
    /* margin-top: 15px; */
    color: ${({ theme }) => theme.colors.pink};
    font-size: 35px;
`;

export const Photo = styled(Image)`
    width: 72px;
    height: 72px;

    border-radius: 1000px;
`

