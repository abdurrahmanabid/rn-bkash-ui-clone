import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Dialog } from "react-native-paper";
import Blocks from "../components/Blocks";
import LogoContainer from "../components/LogoContainer";

const OTPScreen = ({ navigation }) => {
  const banner = require("../assets/imgs/banner.png");
  const [time, setTime] = useState(60);
  const [phoneNumber, setPhoneNumber] = useState("01787765129");
  const [visible, setVisible] = useState(false);

  const randomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
        if (time === 45) {
          setVisible(true);
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  const actionHandler = () => {
    navigation.navigate("Home");
  };

  const [otp, setOtp] = useState(randomNumber());
  return (
    <View style={styles.container}>
      <LogoContainer />
      <Text style={styles.textHeader}>আপনার মোবাইল নাম্বার </Text>
      <Text style={styles.textHeader}>যাচাই করুন </Text>
      <View style={styles.upperText}>
        <Text>ভ্যারিফিকেশন কোড</Text>
        <Text style={{ color: "#E41872" }}>পূনরায় পাঠান {time}s পর</Text>
      </View>
      <View style={styles.blockConteiner}>
        <Blocks />
        <Blocks />
        <Blocks />
        <Blocks />
        <Blocks />
        <Blocks />
      </View>
      <Text style={styles.upperText}>
        ভেরিফিকেশন কোড এই নাম্বারে পাঠানো হয়েছে
      </Text>
      <View style={styles.last}>
        <Text>{phoneNumber}</Text>
        <View style={{ marginLeft: 5 }}>
          <Text style={{ color: "#E41872" }}>(পরিবর্তন করুন)</Text>
        </View>
      </View>
      <Image
        source={banner}
        resizeMode="contain"
        style={{
          width: "95%",
          alignSelf: "center",
          height: 175,
          marginTop: 15,
        }}
      />
      <Dialog visible={visible} onDismiss={() => console.log("Dismiss")}>
        <Dialog.Content>
          <Text variant="bodyMedium">
            আপনার কোড হলো {otp}. কনফার্ম করতে বাটন ok ক্লিক করুন
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => actionHandler()}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default OTPScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textHeader: {
    fontSize: 25,
    marginTop: 10,
    marginLeft: 15,
  },
  upperText: {
    fontSize: 15,
    marginTop: 30,
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  blockConteiner: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",

    width: "80%",
    alignSelf: "center",
  },
  last: {
    marginTop: 5,
    flexDirection: "row",
    marginLeft: 15,
  },
});
