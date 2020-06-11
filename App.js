import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const MovieItem = ({ item }) => (
  <View>
    <Text style={style.moviesItems}>{item}</Text>
  </View>
);

export default function App() {
  // State movie
  const [moviesCollection, setMoviesCollection] = useState([]);
  const [singleMovie, setSingleMovie] = useState("");
  // Setting movie state on funciton callback
  const movieHandling = (movieEntered) => {
    setSingleMovie(movieEntered);
  };
  // Handling movie collection
  const handleMoviesCollection = () => {
    setMoviesCollection(() => [
      ...moviesCollection,
      { key: Math.random().toString(), value: singleMovie },
    ]);
    setSingleMovie("");
  };

  useEffect(() => {
    console.log("DOM RENDERED");
  });

  return (
    <View>
      <View style={style.root}>
        <Text style={style.headerText}>{singleMovie}</Text>
        <TextInput
          placeholder={"Please input your new text here..."}
          onChangeText={movieHandling}
          value={singleMovie}
          style={style.textInput}
        />
        <Button title="Button text" onPress={handleMoviesCollection} />
      </View>

      <FlatList
        keyExtractor={(item) => item.key}
        data={moviesCollection}
        renderItem={(itemData) => (
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => console.log("Executing function here")}
          >
            <MovieItem item={itemData.item.value} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    padding: 57,
    flex: 1,
  },
  headerText: {
    fontSize: 10.55,
    color: "#ccc",
    padding: 9,
    paddingLeft: 0,
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: "darkcyan",
    padding: 9,
    marginBottom: 3.55,
  },
  moviesItems: {
    paddingVertical: 8,
    backgroundColor: "#ccc",
    marginVertical: 15,
    textAlign: "center",
    width: "100%",
  },
});
