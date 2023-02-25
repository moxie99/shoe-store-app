import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import cart from "../data/cart"
import CartListItem from "../components/CartListItem"

const ShoppingCart = () => {
  const ShoppingCartTotal = () => (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>410,100US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>50US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.bold}>Total</Text>
        <Text style={styles.bold}>410,100US$</Text>
      </View>
    </View>
  )
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotal}
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  )
}

export default ShoppingCart

const styles = StyleSheet.create({
  totalsContainer: {
    paddingTop: 10,
    margin: 20,
    borderColor: "lightgray",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "2%",
  },
  text: {
    fontSize: 16,
    color: "grey",
  },
  bold: {
    fontWeight: "600",
    color: "black",
  },
  button: {
    position: "absolute",
    backgroundColor: "purple",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
})
