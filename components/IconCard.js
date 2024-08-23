import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const IconCard = ({ image, title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Image source={image} style={styles.image} />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 15,
            marginTop: 5,
            //more than gray color
            color: "gray",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default IconCard;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
