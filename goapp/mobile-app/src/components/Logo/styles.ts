import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.shape_100};
    font-size: 25px;
`;

export const Point = styled(Text)`
    /* margin-top: 15px; */
    color: ${({ theme }) => theme.colors.pink};
    font-size: 35px;
`;

