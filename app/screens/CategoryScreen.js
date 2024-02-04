import React from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import catBg from "../images/alBooks.jpg";
import { useDispatch } from "react-redux";
import { addCategory } from "../redux/SliceCreator";

const CategoryScreen = (props) => {
  const dispatch = useDispatch();

  const onSelectCat = (value) => {
    dispatch(addCategory(value));
    props.navigation.navigate("allBooks");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={catBg} blurRadius={5} style={styles.imageBackground}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.selectCatText}>Choose a category</Text>

          <TouchableOpacity onPress={() => onSelectCat("Adventure")}>
            <Text style={styles.catText}>Adventure</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onSelectCat("Crime")}>
            <Text style={styles.catText}>Crime</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onSelectCat("Fantasy")}>
            <Text style={styles.catText}>Fantasy</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onSelectCat("Sci-Fi")}>
            <Text style={styles.catText}>Sci-Fi</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onSelectCat("Thriller")}>
            <Text style={styles.catText}>Thriller</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onSelectCat("History")}>
            <Text style={styles.catText}>History</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onSelectCat("Historical Fiction")}>
            <Text style={styles.catText}>Historical Fiction</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onSelectCat("Horror")}>
            <Text style={styles.catText}>Horror</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onSelectCat("Biography")}>
            <Text style={styles.catText}>Biography</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onSelectCat("Art Book")}>
            <Text style={styles.catText}>Art Book</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
  },
  catText: {
    color: "#fff",
    fontSize: 30,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
    color: "grey",
    padding: 5,
    elevation: 10,
    textShadowRadius: 1,
    textShadowColor: "black",
    fontWeight: "300",
    width: 350,
    textAlign: "center",
    marginBottom: 10,
  },
  selectCatText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "500",
    marginBottom: 10,
  },
});

export default CategoryScreen;
