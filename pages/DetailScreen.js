import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  deleteContact,
  deleteFavourite,
  saveContact,
  saveFavourite,
} from "../service";
import { useDispatch } from "react-redux";

const DetailScreen = ({ route }) => {
  const dispatch = useDispatch();
  let item = route.params.item;

  const addContact = () => {
    saveContact(item["key"], dispatch);
  };
  const removeContact = () => {
    deleteContact(item["key"], dispatch);
  };

  const addFavorite = () => {
    saveFavourite(item["key"], dispatch);
  };

  const removeFavorite = () => {
    deleteFavourite(item["key"], dispatch);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: item["avatar"],
            }}
          />

          <Text style={styles.name}>{item["name"]}</Text>
          <Text style={styles.userInfo}>
            {item["company"]}, {item["position"]}
          </Text>
          <View style={styles.social}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item["social_networks"]["facebook"]);
              }}
            >
              <Ionicons
                name="logo-facebook"
                size={24}
                color="black"
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item["social_networks"]["skypse"]);
              }}
            >
              <Ionicons
                name="logo-skype"
                size={24}
                color="black"
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item["social_networks"]["twitter"]);
              }}
            >
              <Ionicons
                name="logo-twitter"
                size={24}
                color="black"
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item["social_networks"]["linkedin"]);
              }}
            >
              <Ionicons
                name="logo-linkedin"
                size={24}
                color="black"
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(item["social_networks"]["instagram"]);
              }}
            >
              <Ionicons
                name="logo-instagram"
                size={24}
                color="black"
                style={styles.socialIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.item}>Company: {item["company"]}</Text>
        <Text style={styles.item}>Position: {item["position"]}</Text>
        <Text style={styles.item}>City: {item["city"]}</Text>
        <Text style={styles.item}>
          Is Contact: {item["isContact"] ? "True" : "False"}
        </Text>
        <Text style={styles.item}>
          Is Favorite: {item["isFavourite"] ? "True" : "False"}
        </Text>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <View style={{ padding: 5 }}>
            {item["isContact"] && (
              <Button
                title="Delete from contacts"
                onPress={() => removeContact()}
              />
            )}
            {!item["isContact"] && (
              <Button title="Add to contacts" onPress={() => addContact()} />
            )}
          </View>
          <View style={{ padding: 5 }}>
            {item["isFavourite"] && item["isContact"] && (
              <Button title="Delete from favorites" onPress={removeFavorite} />
            )}

            {item["isContact"] && !item["isFavourite"] && (
              <Button title="Add To Favourites" onPress={addFavorite} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  social: {
    flexDirection: "row",
  },
  socialIcon: {
    borderRadius: 63,
    borderWidth: 1,
    padding: 5,
    margin: 5,
    borderColor: "black",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
    padding: 20,
    fontSize: 14,
  },
  item: {
    flexDirection: "row",
    fontSize: 20,
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
  button: {
    fontSize: 14,
  },
});

export default DetailScreen;
