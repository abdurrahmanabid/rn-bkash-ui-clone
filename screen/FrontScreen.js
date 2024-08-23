import { Button } from "galio-framework";
import React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import CardComponent from "../components/CardComponent";
import Loader from "../components/Loader";

const FrontScreen = ({ navigation }) => {
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <View>
          <View style={{ height: 450 }}>
            <CardComponent />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 26,
                marginBottom: 40,
              }}
            >
              বিকাশ একাউন্ট খুলুন মিনিটেই
            </Text>
            <Button
              round
              size={"large"}
              mode="outlined"
              style={{ alignSelf: "center" }}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              লগইন/রেজিস্ট্রেশন
            </Button>

            <TouchableOpacity>
              <View
                style={{
                  marginTop: 20,
                  borderColor: "#DE3163",
                  borderWidth: 2,
                  borderRadius: 25,
                  alignSelf: "center",
                  padding: 10,
                  width: "90%",
                  alignItems: "center",
                  color: "#FF0073",
                  marginBottom: 30,
                }}
              >
                <Text style={{ color: "#FF0073", fontSize: 16 }}>
                  বিকাশ নাম্বার পরিবর্তন{" "}
                </Text>
              </View>
            </TouchableOpacity>

            <Text
              style={{ color: "#FF0073", fontSize: 16, alignSelf: "center" }}
            >
              বিকাশ এপপ ঘুরে আসুন
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default FrontScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
  },
});
