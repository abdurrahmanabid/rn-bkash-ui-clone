import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Menu from "../components/Menu";
import UserCard from "../components/UserCard";
import Home from "./Home";
import QRScreen from "./QRScreen";

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 70,
        backgroundColor: "#E91E63",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            {route.name === "QR" ? (
              <View
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "white",
                  borderRadius: 35,
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 30,
                }}
              >
                <FontAwesome5 name="qrcode" size={24} color="#E91E63" />
              </View>
            ) : (
              <>
                <FontAwesome5
                  name={route.name === "Home" ? "home" : "envelope"}
                  size={24}
                  color={isFocused ? "white" : "#f8bbd0"}
                />
                <Text style={{ color: isFocused ? "white" : "#f8bbd0" }}>
                  {label}
                </Text>
              </>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const InboxScreen = () => (
  <View>
    <Text>Inbox Screen</Text>
  </View>
);

const HomeScreen = () => {
  const user = require("../assets/imgs/user.png");
  const userName = "আবদুর রহমান আবিদ";
  const balance = 10763.88;
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarLabel: "ইনবক্স",

        headerTitle: "",

        headerStyle: { backgroundColor: "#E91E63", height: 100 },
        headerLeft: () => (
          <UserCard name={userName} image={user} balance={balance} />
        ),
        headerRight: () => {
          return (
            <View
              style={{
                width: 70,
                height: 70,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 35,
                marginRight: 10,
                flexDirection: "row",
              }}
            >
              <FontAwesome5 name="trophy" size={24} color="#fff" />
              <TouchableOpacity
                onPress={() => {
                  return setModalVisible(!modalVisible);
                }}
              >
                {modalVisible ? <Menu /> : null}
                <Image
                  source={require("../assets/imgs/bkash_logo.png")}
                  style={{ width: 50, height: 50, marginLeft: 5 }}
                />
              </TouchableOpacity>
            </View>
          );
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: "হোম" }}
      />
      <Tab.Screen
        name="QR"
        component={QRScreen}
        options={{ tabBarLabel: "QR স্ক্যান" }}
      />
      <Tab.Screen name="Inbox" component={InboxScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
