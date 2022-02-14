import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';


export const Container = styled(TouchableOpacity)`  
    width: 100%;

    margin-top: 12px;
    background: ${({ theme }) => theme.colors.pink};
    padding: 18px;

    align-items: center;

    border-radius: 5px;
  
`;

export const Title = styled(Text)`  
    color: ${({ theme }) => theme.colors.shape};
    font-size: 14px;

`;

