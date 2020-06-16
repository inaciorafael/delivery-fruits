import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

import {
  Container,
  Header,
  ButtonBack,
  Title,
  SearchContainer,
  Search,
  CategoriesContainer,
  RowView,
} from "./styles";

import CardCategory from "../../components/CardCategori";
import SearchComponent from '../../components/Search';

import vegetables from "../../assets/vegetables.png";
import fruits from "../../assets/fruits.png";
import bread from "../../assets/bread.png";
import sweets from "../../assets/sweets.png";
import pasta from "../../assets/pasta.png";
import drinks from "../../assets/drinks.png";

import ProductScreen from '../../pages/Product';

const Tab = createBottomTabNavigator();

function Categories() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <ButtonBack onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={24} color="#2D0C57" />
        </ButtonBack>
      </Header>
      <Title>Categories</Title>
      <ScrollView>
      <SearchContainer>
        <Octicons name="search" size={24} color="#2D0C57" />
        <Search placeholder="Search" placeholderTextColor="#9586A8" />
      </SearchContainer>
        <CategoriesContainer>
          <RowView>
            <CardCategory name="Vegetables" value={42} image={vegetables} onPress={() => navigation.navigate('Product')} />
            <CardCategory name="Fruits" value={32} image={fruits} />
          </RowView>
          <RowView>
            <CardCategory name="Bread" value={22} image={bread} />
            <CardCategory name="Sweets" value={56} image={sweets} />
          </RowView>
          <RowView>
            <CardCategory name="Pasta" value={43} image={pasta} />
            <CardCategory name="Drinks" value={43} image={drinks} />
          </RowView>
        </CategoriesContainer>
      </ScrollView>
    </Container>
  );
}

const StackTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories" component={Categories} />
    </Tab.Navigator>
  );
};

export default StackTabs;
