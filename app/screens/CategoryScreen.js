import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
    <SafeAreaView style={styles.catContainer}>
      <ImageBackground
        source={catBg}
        blurRadius={5}
        style={{
          ...styles.catContainer,
          width: "100%",
          height: "100%",
          paddingVertical: 0,
          justifyContent: "baseline",
        }}
      >
        <ScrollView contentContainerStyle={styles.selectCat}>
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
  catContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  selectCat: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    gap: 8,
    flexGrow: 1,
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
  },
  selectCatText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "500",
    padding: 5,
    elevation: 10,
    marginBottom: 10,
  },
});

export default CategoryScreen;
