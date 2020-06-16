import React from "react";
import { Image, TouchableOpacity } from "react-native";

import { Container, Title, NumberItems } from "./styles";

const CardCategori = ({ name, value, image, onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Image source={image} resizeMode="contain" />
        <Title>{name}</Title>
        <NumberItems>{`(${value})`}</NumberItems>
      </Container>
    </TouchableOpacity>
  );
};

export default CardCategori;
