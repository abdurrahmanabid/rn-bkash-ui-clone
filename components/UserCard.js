import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const UserCard = (props) => {
  const [balanceShow, setBalanceShow] = useState(false);
  return (
    <View style={styles.centerImageContainer}>
      <View style={styles.imageWrapper}>
        <Image source={props.image} style={styles.image} />
      </View>
      <View style={styles.userContainer}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          {props.name}
        </Text>
        <View style={styles.balanceContainer}>
          <View style={styles.icon}>
            <FontAwesome5 name="rupee-sign" size={10} color="white" />
          </View>
          <TouchableOpacity onPress={() => setBalanceShow(!balanceShow)}>
            <Text
              style={{
                color: "#E41872",
                fontWeight: "bold",
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              {balanceShow ? props.balance : "ব্যালেন্স দেখুন"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserCard;
const styles = StyleSheet.create({
  centerImageContainer: {
    marginTop: 2,

    alignItems: "center",
    flexDirection: "row",
  },
  imageWrapper: {
    width: 55,
    height: 55,
    borderRadius: 35,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#fff",
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },
  userContainer: {
    marginLeft: 10,
  },
  balanceContainer: {
    width: 120,
    height: 22,
    backgroundColor: "white",
    borderRadius: 25,
    flexDirection: "row",
  },
  icon: {
    width: 20,
    height: 20,
    backgroundColor: "#E91E63",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 1,
    marginTop: 1,
  },
});
