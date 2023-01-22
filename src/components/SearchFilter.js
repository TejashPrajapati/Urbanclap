import { StyleSheet, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import COLORS from "../consts/color";
import { useNavigation } from "@react-navigation/native";
const PORT = 4000;

const SearchFilter = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filteredData, setfilteredData] = useState([]);


  useEffect(() => {
    fetchData("https://localhost:4000/api/womansalon");
  }, []);

  useEffect(() => {
    navigation.setOptions({ 
      headerLargeTitle: false,
    });
  }, [navigation]);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json.results);
      setfilteredData(json.results);
      console.log(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.searchbar}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search Services"
          style={{ color: COLORS.grey }}
        />
      </View>
    </View>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 25,
    flexDirection: "row",
    paddingHorizontal: 30,
    alignItems: "center",
    elevation: 12,
  },
  searchbar: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
