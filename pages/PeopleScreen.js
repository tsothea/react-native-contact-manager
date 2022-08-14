import React from "react";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import Styles from "../assets/style/Styles";
import { useSelector } from "react-redux";
import Contact from "../layout/Contact";

const PeopleScreen = (navigation) => {
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

export default PeopleScreen;
