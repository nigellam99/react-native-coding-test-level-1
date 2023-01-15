import React from "react";
import { View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import PrimaryButton from "../../components/Button/PrimaryButton";

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <PrimaryButton
        buttonColor="black"
        titleColor="white"
        title="Contact Us"
        buttonStyle={{
          borderWidth: 1,
          borderColor: "#1c1c1c",
          borderRadius: 10,
        }}
        textStyle={{ fontSize: wp("8%") }}
        onPress={() => navigation.navigate("Contact Us")}
      />
      <PrimaryButton
        buttonColor="black"
        titleColor="white"
        title="View Catalog"
        buttonStyle={{
          borderWidth: 1,
          borderColor: "#1c1c1c",
          borderRadius: 10,
          marginTop: 20,
        }}
        textStyle={{ fontSize: wp("8%") }}
        onPress={() => navigation.navigate("View Catalog")}
      />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
