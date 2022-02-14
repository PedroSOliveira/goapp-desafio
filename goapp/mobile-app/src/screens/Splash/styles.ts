import styled from 'styled-components';
import { View } from 'react-native';
import { Logo } from "../../components/Logo";


export const Container = styled(View)`  
    flex: 1;
    background: ${({ theme }) => theme.colors.gray_200};
    align-items: center;
`;

export const Header = styled(View)`
    margin-top: 150px;
`;

export const LogoSplash = styled(Logo)`
    font-size: 50px;
`;

