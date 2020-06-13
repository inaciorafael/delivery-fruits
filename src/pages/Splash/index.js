import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Ellipse8,
  Ellipse10,
  Card,
  CardTitle,
  CardDescription,
  ButtonOrder,
  TextButton,
  ButtonDimiss,
  TextButtonDimiss,
} from "./styles";

import Logo from "../../svgComponents/Logo";
import BoxSplashCard from "../../svgComponents/BoxSplashCard";

import Ellipse8Back from "../../assets/Ellipse8.png";
import Ellipse10Back from "../../assets/Ellipse10.png";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Ellipse8 source={Ellipse8Back} style={{ width: 400, height: 1000 }} />
      <Ellipse10
        source={Ellipse10Back}
        resizeMode="contain"
        style={{
          width: 400,
          height: 400,
          position: "absolute",
          marginLeft: 130,
        }}
      />
      <Logo style={{ position: "absolute", marginTop: 63, marginLeft: 20 }} />
      <Card>
        <BoxSplashCard style={{ marginTop: 64 }} />
        <CardTitle>{`Non-Contact\nDeliveries`}</CardTitle>
        <CardDescription>{`When placing an order, select the option\n"Contactless delivery" and the courier will leave\nyour order at the door.`}</CardDescription>
        <ButtonOrder onPress={() => navigation.navigate('Categories')}>
          <TextButton>ORDER NOW</TextButton>
        </ButtonOrder>
        <ButtonDimiss>
          <TextButtonDimiss>DIMISS</TextButtonDimiss>
        </ButtonDimiss>
      </Card>
    </Container>
  );
};

export default Splash;
