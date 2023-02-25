import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ProductScreen from "../screens/ProductScreen"
import ProductDetailsScreen from "../screens/productDetailsScreen"
import ShoppingCart from "../screens/ShoppingCart"
import { FontAwesome5 } from "@expo/vector-icons"

const Stack = createNativeStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{
                  borderRadius: 100,
                  backgroundColor: "lightgray",
                  padding: 10,
                  flexDirection: "row",
                  position: "relative",
                }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="purple" />
                <Text
                  style={{
                    color: "purple",
                    fontSize: 18,
                    position: "absolute",
                    right: 8,
                    fontWeight: "500",
                  }}
                >
                  1
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ProductsDetails"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
