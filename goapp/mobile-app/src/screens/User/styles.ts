import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
import { Button } from '../../components/Forms/Button';

export const Container = styled(View)`  
    flex: 1;
    background: ${({ theme }) => theme.colors.gray_200};
`;

export const Header = styled(View)`
    background: ${({ theme }) => theme.colors.gray_200};

    padding: 0 20px;
    margin-top: 30px;

    width: 100%;
    height: 80px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContentHeader = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 20px;

    margin-left: 5px;
`;

export const Icon = styled(Feather)` 
    color: ${({ theme }) => theme.colors.shape};
    /* padding: 20px; */
    font-size: 25px;
`;
export const Form = styled(View)`
    flex: 1;
    width: 100%;

    padding: 10px 24px;

    margin-bottom: 10px;
    justify-content: space-between;
`;

export const Fields = styled(View)`
    margin-bottom: 120px;
`;


export const Upload = styled(View)`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

export const PickImageButton = styled(Button)`  
    max-width: 90px;
    padding: 10px;

    /* margin-top: 20px; */

`;

export const DeleteButton = styled(Button)`  
    background: ${({ theme }) => theme.colors.attention};

`;

export const Photo = styled(Image)`
    width: 42px;
    height: 42px;

    border-radius: 1000px;
`
