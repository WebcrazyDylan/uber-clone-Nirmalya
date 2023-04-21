import React from "react";
import tw from "twrnc";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

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
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
