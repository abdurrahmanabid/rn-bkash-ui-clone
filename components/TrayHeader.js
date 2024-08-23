import React from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-paper";

const TrayHeader = ({ title1, title2 }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold", color: "gray" }}>{title1}</Text>
        <Text style={{ color: "#E41872" }}>{title2}</Text>
      </View>
      <Divider style={{ marginBottom: 10 }} />
    </View>
  );
};

export default TrayHeader;
