import React from "react";
import {  Image, StatusBar } from "react-native";
import {  AntDesign, EvilIcons } from "@expo/vector-icons";

import {
  Container,
  CardBuy,
  Title,
  TextPrice,
  Bold,
  TextGr,
  Country,
  Description,
  ButtonsContainer,
  ButtonLike,
  ButtonBuy,
  BuyText
} from "./styles";

import alfacesBackground from "../../assets/alfacesBackground.png";

const Buy = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Image source={alfacesBackground} />
      <CardBuy>
        <Title>Boston Lettuce</Title>
        <TextPrice>
          <Bold>1.10</Bold> € / piece
        </TextPrice>
        <TextGr>~ 150 gr / piece</TextGr>
        <Country>Spain</Country>
        <Description>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Description>
        <ButtonsContainer>
          <ButtonLike>
          <EvilIcons name="heart" size={24} color="black" />
          </ButtonLike>
          <ButtonBuy>
            <AntDesign name="shoppingcart" size={20} color="#fff" />
            <BuyText>ADD TO CARD</BuyText>
          </ButtonBuy>
        </ButtonsContainer>
      </CardBuy>
    </Container>
  );
};

export default Buy;
