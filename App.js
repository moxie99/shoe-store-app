import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import products from "./src/data/products"
import ProductDetailsScreen from "./src/screens/productDetailsScreen"
import ProductScreen from "./src/screens/ProductScreen"

export default function App() {
  return (
    <View style={styles.container}>
      {/*<ProductScreen />*/}
      <ProductDetailsScreen />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
})
