import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DateTimePicker from "@react-native-community/datetimepicker";
import PrimaryButton from "../../components/Button/PrimaryButton";

const ContactUs = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dateDisplay, setDateDisplay] = useState(false);
  const [valid, setValid] = useState(false);
  const [submit, setSubmit] = useState(false);

  const onChangeName = (nameInput) => {
    if (nameInput.length == 0 || nameInput.match(/^[a-zA-Z]+$/)) {
      setName(nameInput);
    }
  };

  const onChangeEmail = (emailInput) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(emailInput) === false) {
      setValid(false);
      setEmail(emailInput);
      return false;
    } else {
      setEmail(emailInput);
      setValid(true);
    }
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setShow(false);
    setDateDisplay(true);
    console.log(date);
  };

  const showDatepicker = () => {
    setDateDisplay(false);
    setShow(true);
  };

  const onSubmit = () => {
    setSubmit(true);
    if (name !== "" && valid == true && dateDisplay == true) {
      Alert.alert(
        "User Information",
        "Name: " +
          name +
          "\n\nEmail: " +
          email +
          "\n\nBirthday: " +
          date.toDateString(),
        [{ text: "OK", onPress: () => console.log("OK") }]
      );
    } else {
      Alert.alert(
        "Missing / Invalid User Information",
        "Please double check your information and try submit again. Thank you.",
        [{ text: "OK", onPress: () => console.log("OK") }]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter your information</Text>
      <Text style={styles.title}>Name:</Text>
      <TextInput
        allowFontScaling={false}
        style={styles.forminput}
        onChangeText={onChangeName}
        value={name}
        selectionColor={"orange"}
        keyboardType="default"
        returnKeyType="next"
        maxLength={50}
      ></TextInput>
      {submit == true && name == "" ? (
        <Text style={styles.error}>Name cannot be empty</Text>
      ) : null}
      <Text style={styles.title}>Email:</Text>
      <TextInput
        allowFontScaling={false}
        style={styles.forminput}
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
        selectionColor={"orange"}
        keyboardType="email-address"
        returnKeyType="next"
      ></TextInput>
      {submit == true && valid == false ? (
        <Text style={styles.error}>Email address is not valid</Text>
      ) : null}
      <Text style={styles.title}>Birthday Date:</Text>
      <TouchableWithoutFeedback onPress={() => showDatepicker()}>
        {dateDisplay == false ? (
          <Text style={styles.forminput}></Text>
        ) : (
          <Text style={styles.forminput}>{date.toDateString()}</Text>
        )}
      </TouchableWithoutFeedback>
      {submit == true && dateDisplay == false ? (
        <Text style={styles.error}>Select a date</Text>
      ) : null}
      {show == true ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={false}
          display="default"
          onChange={onChange}
          maximumDate={new Date()}
        />
      ) : null}
      <PrimaryButton
        buttonColor="black"
        titleColor="white"
        title="Submit"
        buttonStyle={{
          borderWidth: 1,
          borderColor: "#1c1c1c",
          borderRadius: 10,
          marginTop: 20,
        }}
        textStyle={{ fontSize: wp("8%") }}
        onPress={() => onSubmit()}
      />
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: wp("5%"),
  },
  header: {
    color: "black",
    fontSize: wp("8%"),
    fontWeight: "bold",
    marginBottom: 20,
  },
  title: {
    color: "black",
    fontSize: wp("5%"),
    alignSelf: "flex-start",
    marginTop: 10,
  },
  error: {
    color: "red",
    fontSize: wp("3%"),
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  forminput: {
    color: "black",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 5,
    fontSize: wp("5%"),
    height: hp("4%"),
    width: wp("90%"),
    paddingHorizontal: 5,
  },
});
