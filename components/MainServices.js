import React from "react";
import { StyleSheet, View } from "react-native";
import IconCard from "./IconCard";

const MainServices = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.cards}>
          <IconCard
            image={require("../assets/imgs/icons/send money.png")}
            title="সেন্ড মানি"
          />
          <IconCard
            image={require("../assets/imgs/icons/recharge.png")}
            title=" মোবাইল রিচার্জ"
          />
          <IconCard
            image={require("../assets/imgs/icons/cash out.png")}
            title="ক্যাশ আউট"
          />
          <IconCard
            image={require("../assets/imgs/icons/payment.png")}
            title="পেমেন্ট"
          />
        </View>
        <View style={styles.cards}>
          <IconCard
            image={require("../assets/imgs/icons/add money.png")}
            title="অ্যাড মানি"
          />
          <IconCard
            image={require("../assets/imgs/icons/pay bill.png")}
            title="পে বিল"
          />
          <IconCard
            image={require("../assets/imgs/icons/savings.png")}
            title="সেভিংস"
          />
          <IconCard
            image={require("../assets/imgs/icons/more.png")}
            title=" আরও"
          />
        </View>
      </View>
    </View>
  );
};

export default MainServices;

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
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
  cards: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: 10,
  },
});
