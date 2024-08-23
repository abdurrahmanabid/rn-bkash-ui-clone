import React from "react";
import { Image, StyleSheet, View } from "react-native";

const LogoContainer = () => {
  const logo = require("./../assets/imgs/logoPink.jpg");
  return (
    <View style={styles.imageContainer}>
      <Image source={logo} style={styles.image} />
    </View>
  );
};

export default LogoContainer;
const styles = StyleSheet.create({
  imageContainer: {
    height: 90,
    marginBottom: 10,
  },
  image: {
    height: 90,
    width: 90,
  },
});
