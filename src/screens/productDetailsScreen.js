import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native"
import React from "react"
import products from "../data/products"

const ProductDetailsScreen = () => {
  const product = products[0]

  const { width } = useWindowDimensions()

  const addToCart = () => {}
  return (
    <View>
      <ScrollView>
        <FlatList
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          data={product.images}
          renderItem={({ item }) => (
            <Image
              source={{
                uri: item,
              }}
              style={{ width, aspectRatio: 1 }}
            />
          )}
        />

        <View style={{ padding: "4%" }}>
          <Text style={styles.title}>{product.name}</Text>

          <Text style={styles.price}>${product.price}</Text>

          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <Pressable onPress={addToCart} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  title: { fontSize: 36, fontWeight: "600", marginVertical: "2%" },
  price: { fontWeight: "600", fontSize: 24, letterSpacing: 2 },
  description: {
    marginVertical: "2%",
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "200",
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
