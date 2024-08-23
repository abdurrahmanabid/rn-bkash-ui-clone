import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Banner = ({ image }) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  image: {
    width: "93%",
    resizeMode: "contain",
    alignSelf: "center",
    //unusual margin remove
    marginTop: -10 - 10 - 30,
    marginBottom: -10 - 10 - 30,
  },
});
