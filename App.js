import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FrontScreen from "./screen/FrontScreen";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import OTPScreen from "./screen/OTPScreen";

export default () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="FrontScreen" component={FrontScreen} />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#E41872",
            headerTitleStyle: {
              display: "none",
            },
            headerRight: () => (
              <View style={styles.englishButton}>
                <Text style={{ color: "#E41872" }}>English</Text>
              </View>
            ),
          }}
          name="OTPScreen"
          component={OTPScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerTintColor: "#E41872",
            headerTitleStyle: {
              display: "none",
            },
            headerRight: () => (
              <View style={styles.englishButton}>
                <Text style={{ color: "#E41872" }}>English</Text>
              </View>
            ),
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  englishButton: {
    padding: 3,
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E41872",
  },
});
