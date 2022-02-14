import { useNavigation, CommonActions } from "@react-navigation/native";
import { useEffect } from "react";

import userSplash from "../../assets/userJson.json";

import LottieView from "lottie-react-native";

import { Container, Header, LogoSplash } from "./styles";

export const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(
      () => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "home" }],
          })
        );
      },
      4000,
      []
    );
  });
  return (
    <Container>
      <Header>
        <LogoSplash />
      </Header>
      <LottieView
        duration={1000}
        source={userSplash}
        autoPlay
        loop
        resizeMode="contain"
      />
    </Container>
  );
};
