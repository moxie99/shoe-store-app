import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { productsSlice } from "../store/ProductsSlice"
const ProductScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products)

  const dispatch = useDispatch()
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id))
            navigation.navigate("ProductsDetails")
          }}
          style={styles.itemContainer}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
})
