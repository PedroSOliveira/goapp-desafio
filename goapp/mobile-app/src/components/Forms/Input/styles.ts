import styled from 'styled-components';
import { TextInput } from 'react-native';

import { Feather } from "@expo/vector-icons";

export const Container = styled(TextInput)`  
    width: 100%;
    padding: 16px 18px;

    font-size: 14px;
    background: ${({ theme }) => theme.colors.gray_300};

    color: ${({ theme }) => theme.colors.shape_100};
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const Icon = styled(Feather)`

    color: ${({ theme }) => theme.colors.pink};
    font-size: 28px;
`;