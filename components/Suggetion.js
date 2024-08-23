import React from "react";
import { StyleSheet, View } from "react-native";
import IconCard from "./IconCard";
import TrayHeader from "./TrayHeader";

const Suggetion = () => {
  return (
    <View style={styles.container}>
      <TrayHeader title1="সাজেশন" title2="আরও দেখুন" />
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <IconCard
          image={require("../assets/imgs/icons/visa.png")}
          title="Card Bill"
        />
        <IconCard
          image={require("../assets/imgs/icons/music.png")}
          title="Sadhin music"
        />
        <IconCard
          image={require("../assets/imgs/icons/medicine.png")}
          title="Card Bill"
        />
        <IconCard
          image={require("../assets/imgs/icons/land.png")}
          title="Card Bill"
        />
      </View>
    </View>
  );
};

export default Suggetion;
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
  },
});
