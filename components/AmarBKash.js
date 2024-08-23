import React from "react";
import { StyleSheet, View } from "react-native";
import IconCard from "./IconCard";
import TrayHeader from "./TrayHeader";

const AmarBKash = () => {
  return (
    <View style={styles.container}>
      <TrayHeader title1="আমার বিকাশ" title2="আরও দেখুন" />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <IconCard
          image={require("../assets/imgs/icons/ofer.png")}
          title="My Offers"
        />
        <IconCard
          image={require("../assets/imgs/icons/saved bill.png")}
          title="Saved Bills"
        />
        <IconCard
          image={require("../assets/imgs/icons/prio number.png")}
          title="Prio Number"
        />
        <IconCard
          image={require("../assets/imgs/icons/saved.png")}
          title="Mashrafee"
        />
      </View>
    </View>
  );
};

export default AmarBKash;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    backgroundColor: "#fff", // Card-like background color
    padding: 10,
    shadowColor: "#000", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android shadow
    margin: 10,
    marginTop: 0,
  },
});
