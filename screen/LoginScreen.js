import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Divider, Icon } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const logo = require("./../assets/imgs/logoPink.jpg");
  const bd = require("./../assets/imgs/bd.png");
  const [number, setNumber] = useState("");
  const bottomButtonRef = useRef(null);
  const warning = useRef();

  useEffect(() => {
    if (number.length === 11) {
      bottomButtonRef.current.setNativeProps({
        style: { backgroundColor: "#E41872" },
      });
      console.log(number);
    } else {
      bottomButtonRef.current.setNativeProps({
        style: { backgroundColor: "gray" },
      });
    }
    if (
      (number.startsWith("01") && number.startsWith("0")) ||
      number.startsWith("01") ||
      number.startsWith("0") ||
      number === ""
    ) {
      warning.current.setNativeProps({
        style: { display: "none", color: "red" },
      });
    } else {
      warning.current.setNativeProps({
        style: { display: "flex" },
      });
    }
  }, [number]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <Text style={styles.textHeader}>মোবাইল নাম্বার দিয়ে</Text>
      <Text style={styles.textHeader}>লগইন/রেজিস্ট্রেশন করুন</Text>
      <Text style={styles.textCode}>দেশের কোড</Text>
      <View style={styles.country}>
        <Image source={bd} style={styles.bdImage} />
        <Text style={styles.textBD}>বাংলাদেশ</Text>
      </View>
      <Text style={styles.textCode}>মোবাইল নাম্বার</Text>
      <View style={styles.phone}>
        <Text style={styles.textPhone}>+88</Text>
        <TextInput
          style={styles.inputPhone}
          placeholder="01XXXXXXXXX"
          placeholderTextColor="#e2e2e2"
          keyboardType="numeric"
          value={number}
          onChangeText={setNumber}
          maxLength={11}
        />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.warning}>
        <Text style={styles.warningText} ref={warning}>
          01 দিয়ে নাম্বার শুরু করুন
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textCode}>আপনি</Text>
        <Text style={styles.textMiddle}>নিয়ম_ও_শর্তসমূহে</Text>
        <Text style={styles.textEnd}>সম্মত আছেন</Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            if (number.length === 11) {
              navigation.navigate("OTPScreen");
            }
          }}
        >
          <View style={styles.bottomButton} ref={bottomButtonRef}>
            <Text style={styles.bottomButtonText}>পরবর্তি</Text>
            <Icon source="arrow-right" color="#fff" size={25} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageContainer: {
    height: 90,
    marginBottom: 10,
  },
  image: {
    height: 90,
    width: 90,
  },
  textHeader: {
    fontSize: 25,
    marginTop: 10,
    marginLeft: 15,
  },
  textCode: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 15,
  },
  country: {
    height: 40,
    backgroundColor: "#f8f8f8",
    width: "93%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  bdImage: {
    height: 25,
    width: 25,
    marginLeft: 7,
    borderRadius: 25,
  },
  textBD: {
    marginLeft: 10,
  },
  phone: {
    marginLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    height: 40,
  },
  textPhone: {
    fontSize: 16,
  },
  inputPhone: {
    marginLeft: 10,
    fontSize: 16,
    width: "90%",
  },
  divider: {
    alignSelf: "center",
    width: "90%",
  },
  textContainer: {
    flexDirection: "row",
    alignContent: "center",
  },
  textMiddle: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 3,
    textDecorationLine: "underline",
    color: "#E41872",
  },
  textEnd: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 3,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bottomButton: {
    height: 50,
    width: "100%",
    backgroundColor: "gray",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  bottomButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  warning: {
    width: "90%",
    alignSelf: "center",
    height: 15,
  },
  warningText: {
    color: "#E41872",
  },
});
