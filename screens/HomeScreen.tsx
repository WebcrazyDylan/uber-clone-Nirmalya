import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import tw from "twrnc";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
