import React from "react";
import { ScrollView, View } from "react-native";
import AmarBKash from "../components/AmarBKash";
import Banner from "../components/Banner";
import MainServices from "../components/MainServices";
import Others from "../components/Others";
import Suggetion from "../components/Suggetion";

const Home = () => {
  return (
    <ScrollView>
      <View>
        <MainServices />
        <AmarBKash />
        <Banner image={require("../assets/imgs/banner.png")} />
        <Suggetion />
        <Others />
        <Banner image={require("../assets/imgs/banner2.png")} />
      </View>
    </ScrollView>
  );
};

export default Home;
