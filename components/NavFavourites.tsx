import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";

const NavFavourites = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Kendrapara, Odisha, India"
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "Cuttack, Odisha, India"
    }
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Text>ICONS</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
