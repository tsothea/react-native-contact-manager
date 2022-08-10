import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Button,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Profile from "./Profile";
import { NavigationContext } from "@react-navigation/native";

const CustomSidebarMenu = (props) => {
  const navigation = React.useContext(NavigationContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Profile></Profile>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Visit Us"
          onPress={(navigation) => navigation.navigate("Favorites")}
        /> */}
        {/* <DrawerItem
          label="Visit Us"
          onPress={() => Linking.openURL("https://aboutreact.com/")}
        />
        <View style={styles.customItem}>
          <Image
            source={{ uri: BASE_PATH + "star_filled.png" }}
            style={styles.iconStyle}
          />
          <Text
            onPress={() => {
              Linking.openURL("https://aboutreact.com/");
            }}
          >
            Rate Us
          </Text>
        </View> */}
      </DrawerContentScrollView>
      <Text
        style={{ fontSize: 16, textAlign: "center", color: "grey" }}
        onPress={() => {
          Linking.openURL("https://www.vodworks.com");
        }}
      >
        www.vodworks.com
      </Text>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
