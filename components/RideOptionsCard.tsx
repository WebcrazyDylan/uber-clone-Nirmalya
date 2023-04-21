import React from "react";
import tw from "twrnc";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "Uber-X",
    title: "Uber X",
    multiple: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL",
    title: "Uber XL",
    multiple: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX",
    title: "Uber LUX",
    multiple: 1.75,
    image: "https://links.papareact.com/7pf"
  }
];

const RideOptionsCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`-pt-8 bg-white flex-grow`}>
      <View style={tw``}>
        <TouchableOpacity
          // @ts-ignore
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 p-2 rounded-full z-50`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiple, image }, item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center justify-between px-10`}
          >
            <Image
              source={{
                uri: image
              }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
            />

            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text style={tw``}>Travel Time...</Text>
            </View>
            <Text style={tw`text-xl`}>Money</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
