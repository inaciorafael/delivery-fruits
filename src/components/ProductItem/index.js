import React from "react";
import { Text, Image } from "react-native";
import { AntDesign, EvilIcons, Entypo } from "@expo/vector-icons";
import {
  Container,
  ImageContainer,
  InfoContainer,
  TextItem,
  TextPrice,
  Bold,
  RowContainer,
  Button,
} from "./styles";

const ProductItem = ({image, price, onLike, like, onBuy}) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          source={image}
          resizeMode="contain"
          style={{ borderRadius: 8 }}
        />
      </ImageContainer>
      <InfoContainer>
        <TextItem>Boston Lettuce</TextItem>
        <TextPrice>
          <Bold>{price}</Bold> € / pie
        </TextPrice>
        <RowContainer>
          <Button color='#fff' onPress={onLike}>
            {
              like
              ? <Entypo name="heart" size={24} color="#c55a54" />
              : <EvilIcons name="heart" size={24} color="black" />
            }
          </Button>
          <Button color='#0BCE83' onPress={onBuy}>
            <AntDesign name="shoppingcart" size={20} color="#fff" />
          </Button>
        </RowContainer>
      </InfoContainer>
    </Container>
  );
};

export default ProductItem;
