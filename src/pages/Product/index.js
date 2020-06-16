import React, { useState } from "react";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import {
  Container,
  Header,
  ButtonBack,
  Title,
  SearchContainer,
  Search,
  FilterContainer,
  RowContainer,
  Divider,
} from "./styles";

import BrocolisImg from "../../svgComponents/Brocolis";

import alfaces from "../../assets/alfaces.png";
import couveflor from "../../assets/couveflor.png";
import repolho from "../../assets/repolho.png";

import FilterItem from "../../components/FilterItems";
import ProductItem from "../../components/ProductItem";

const Product = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  const [like, setLike] = useState(false);

  const navigation = useNavigation();

  return (
    <Container>
      <BrocolisImg
        style={{ position: "absolute", marginLeft: 240, marginTop: 3 }}
      />
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={24} color="#2D0C57" />
        </ButtonBack>
      </Header>
      <Title>Vegetables</Title>
      <SearchContainer>
        <Octicons name="search" size={24} color="#2D0C57" />
        <Search placeholder="Search" placeholderTextColor="#9586A8" />
      </SearchContainer>
      <FilterContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <RowContainer>
            <FilterItem
              text="Сabbage and lettuce (14)"
              selected={check1}
              onPress={() => {
                setCheck1(!check1);
              }}
            />
            <FilterItem
              text="Сucumbers and tomatoes (10)"
              selected={check2}
              onPress={() => {
                setCheck2(!check2);
              }}
            />
          </RowContainer>
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <RowContainer>
            <FilterItem
              text="Oinons and garlic (8)"
              selected={check3}
              onPress={() => {
                setCheck3(!check3);
              }}
            />
            <FilterItem
              text="Peppers (7)"
              selected={check4}
              onPress={() => {
                setCheck4(!check4);
              }}
            />
            <FilterItem
              text="Potatoes and carrots (4)"
              selected={check5}
              onPress={() => {
                setCheck5(!check5);
              }}
            />
          </RowContainer>
        </ScrollView>
        <Divider />
          <View>
            <ProductItem image={alfaces} price={1.1} onBuy={() => navigation.navigate('Buy')} />
            <ProductItem image={couveflor} price={1.85} like={like} onLike={() => setLike(!like)} />
            <ProductItem image={repolho} price={1.45} />
          </View>
      </FilterContainer>
    </Container>
  );
};

export default Product;
