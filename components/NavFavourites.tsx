import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import tw from "twrnc";

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
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200 h-1`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { icon, destination, location } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
