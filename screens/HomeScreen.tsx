import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    source={{
                        uri: "https://links.papareact.com/gzs"
                    }}
                    style={styles.image}
                />

                <GooglePlacesAutocomplete
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    placeholder="Where From?"
                />

                <NavOptions />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain"
    }
});
