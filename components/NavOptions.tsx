import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const data = [
  {
    id: "123",
    ttile: "Get a Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    ttile: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>{item.ttile}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
