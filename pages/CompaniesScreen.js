import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "../assets/style/Styles";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

const CompaniesScreen = () => {
  const state = useSelector((state) => state);
  const companies = state.companies;
  return (
    <View>
      <FlatList
        data={companies}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("DetailScreen")}
              style={{ marginLeft: 10 }}
            >
              <View style={Styles.containerItem}>
                <View style={Styles.rightContainer}>
                  <Text style={Styles.title}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default CompaniesScreen;
