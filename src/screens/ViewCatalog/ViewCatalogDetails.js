import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import PrimaryButton from "../../components/Button/PrimaryButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ViewCatalogDetails = ({ navigation, route }) => {
  const { id } = route.params;
  const [pkmDetails, setPkmDetails] = useState([]);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const fetchPokemonDetails = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((pkmDetails) => setPkmDetails(pkmDetails));
  };

  return pkmDetails.name ? (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${route.params.id}.png`,
        }}
      />
      <Text style={styles.text}>Name: {pkmDetails.name}</Text>
      <Text style={styles.text}>Height: {pkmDetails.height}</Text>
      <Text style={styles.text}>Weight: {pkmDetails.weight}</Text>
      <Text style={styles.text}>
        Main Ability: {pkmDetails.abilities[0].ability.name}
      </Text>
      <Text style={styles.text}>
        Main Type: {pkmDetails.types[0].type.name}
      </Text>
      <PrimaryButton
        buttonColor="black"
        titleColor="white"
        title="Back"
        buttonStyle={{
          borderWidth: 1,
          borderColor: "#1c1c1c",
          borderRadius: 10,
        }}
        textStyle={{ fontSize: wp("8%") }}
        onPress={() => navigation.goBack()}
      />
    </View>
  ) : (
    <View style={styles.indicator}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default ViewCatalogDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2a75bb",
  },
  image: {
    width: wp("50%"),
    height: wp("50%"),
  },
  text: {
    fontSize: wp("6%"),
    marginBottom: 10,
    textTransform: "capitalize",
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
