import React from "react";
import { Image, View } from "react-native";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
const Loader = () => {
  const logo = require("../assets/imgs/bkash_logo.png");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E41872",
      }}
    >
      <Image source={logo} height={50} width={50} />
      <ActivityIndicator
        animating={true}
        color={MD2Colors.yellow600}
        size={"large"}
      />
    </View>
  );
};

export default Loader;
