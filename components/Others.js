import React from "react";
import { StyleSheet, View } from "react-native";
import IconCard from "./IconCard";
import TrayHeader from "./TrayHeader";

const Others = () => {
  return (
    <View style={styles.container}>
      <TrayHeader title1="অন্যান্য সার্ভিস সমূহ" title2="" />
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <IconCard
            image={require("../assets/imgs/icons/ticket.png")}
            title="টিকেট সেবা"
          />
          <IconCard
            image={require("../assets/imgs/icons/plan.png")}
            title="ফ্লেক্সিপ্ল্যান"
          />
          <IconCard
            image={require("../assets/imgs/icons/insurance.png")}
            title="ইনসুরেন্স"
          />
          <IconCard
            image={require("../assets/imgs/icons/donation.png")}
            title="ডোনেশন"
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <IconCard
            image={require("../assets/imgs/icons/games.png")}
            title="গেইমস"
          />
          <IconCard
            image={require("../assets/imgs/icons/subs.png")}
            title="সাবসক্রিপশন"
          />
          <IconCard
            image={require("../assets/imgs/icons/deen.png")}
            title="দ্বীন"
          />
          <IconCard
            image={require("../assets/imgs/icons/tax.png")}
            title="বিডি ট্যাক্স"
          />
        </View>
      </View>
    </View>
  );
};

export default Others;

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
