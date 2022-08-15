import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import Styles from "../assets/style/Styles";
import Contact from "../layout/Contact";

const SearchScreen = (navigation) => {
  const state = useSelector((state) => state);
  const people = state.people;

  return (
    <View style={Styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => {
          return (
            <View>
              <Contact item={{ item }} navigation={{ navigation }} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchScreen;
