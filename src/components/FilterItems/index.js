import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Container, TextItem } from "./styles";

const FilterItems = ({ text, onPress, selected }) => {
  return (
    <TouchableOpacity style={{ marginRight: 10 }} onPress={onPress}>
      <Container color={selected ? '#E2CBFF' : '#fff'}>
        {selected ? (
          <Feather
            name="check"
            size={16}
            color="#6C0EE4"
            style={{ marginRight: 5 }}
          />
        ) :
          <></>
        }
        <TextItem color={selected ? '#6C0EE4' : '#000'}>{text}</TextItem>
      </Container>
    </TouchableOpacity>
  );
};

export default FilterItems;
