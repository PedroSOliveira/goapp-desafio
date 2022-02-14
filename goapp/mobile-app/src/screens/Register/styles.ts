import styled from 'styled-components';
import { View, Text, Image } from 'react-native';
import { Button } from '../../components/Forms/Button';

import MaskInput from 'react-native-mask-input';

export const Container = styled(View)`  
    flex: 1;
    background: ${({ theme }) => theme.colors.gray_200};
`;

export const Header = styled(View)`
    background: ${({ theme }) => theme.colors.gray_200};

    width: 100%;
    height: 80px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 20px;
`;

export const Form = styled(View)`
    flex: 1;
    width: 100%;

    padding: 10px 24px;

    margin-bottom: 10px;
    justify-content: space-between;
`;

export const Fields = styled(View)`
    margin-bottom: 80px;
`;

export const InputDate = styled(MaskInput)`
    width: 100%;
    padding: 16px 18px;

    font-size: 14px;
    background: ${({ theme }) => theme.colors.gray_300};

    color: ${({ theme }) => theme.colors.shape_100};
    border-radius: 5px;
    margin-bottom: 10px;
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
`;

export const Photo = styled(Image)`
    width: 72px;
    height: 72px;

    border-radius: 1000px;
`
