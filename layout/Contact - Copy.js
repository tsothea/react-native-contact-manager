import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Styles from "../assets/style/Styles";

const Contact = (props) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigation.navigation.navigate("DetailScreen", {
          item: props.item.item,
        })
      }
      style={{ marginLeft: 10 }}
    >
      <View style={Styles.containerItem}>
        <Image
          source={{ uri: props.item.item.avatar }}
          style={Styles.thumbnail}
        />
        <View style={Styles.rightContainer}>
          <Text style={Styles.title}>{props.item.item.name}</Text>
          <Text style={Styles.position}>
            {props.item.item.company}, {props.item.item.position}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Contact;
