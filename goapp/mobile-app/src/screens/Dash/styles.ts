import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`  
    flex: 1;
    background: ${({ theme }) => theme.colors.gray_200};
    align-items: center;
    justify-content: center;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 20px;
`;

