import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PrimaryButton = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || "#FFA500",
      }}
      onPress={onPress}
    >
      <Text
        style={{ ...styles.title, ...textStyle, color: titleColor || "#fff" }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    height: hp("8%"),
    width: wp("60%"),
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: wp("5%"),
  },
});
