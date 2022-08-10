import React from "react";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import Styles from "../assets/style/Styles";
import { connect } from "react-redux";

let data = [
  {
    id: 1,
    name: "Stan Smith",
    city: "Ukrain, Lviv",
    avatar: require("../assets/images/1.jpg"),
    social_networks: {
      facebook: "https://web.facebook.com/MinistryofHealthofCambodia",
      twitter: "https://web.facebook.com/MinistryofHealthofCambodia",
      linkedin: "https://web.facebook.com/MinistryofHealthofCambodia",
      instagram: "https://web.facebook.com/MinistryofHealthofCambodia",
      skypse: "https://web.facebook.com/MinistryofHealthofCambodia",
    },
    company: "Logical Solution",
    position: "CEO",
    isFavourite: false,
    isContact: false,
  },
  {
    id: 2,
    name: "Caroline Dowson",
    city: "Ukrain, Lviv",
    avatar: require("../assets/images/2.jpg"),
    social_networks: {
      facebook: "https://web.facebook.com/MinistryofHealthofCambodia",
      twitter: "https://web.facebook.com/MinistryofHealthofCambodia",
      linkedin: "https://web.facebook.com/MinistryofHealthofCambodia",
      instagram: "https://web.facebook.com/MinistryofHealthofCambodia",
      skypse: "https://web.facebook.com/MinistryofHealthofCambodia",
    },
    company: "PerfectCode",
    position: "Back end dev",
    isFavourite: false,
    isContact: false,
  },
  {
    id: 3,
    name: "Samuel Standford",
    city: "Ukrain, Cherkasy",
    avatar: require("../assets/images/3.jpg"),
    social_networks: {
      facebook: "https://web.facebook.com/MinistryofHealthofCambodia",
      twitter: "https://web.facebook.com/MinistryofHealthofCambodia",
      linkedin: "https://web.facebook.com/MinistryofHealthofCambodia",
      instagram: "https://web.facebook.com/MinistryofHealthofCambodia",
      skypse: "https://web.facebook.com/MinistryofHealthofCambodia",
    },
    company: "HandyCode",
    position: "COO",
    isFavourite: false,
    isContact: false,
  },
  {
    id: 4,
    name: "John Doe",
    city: "Ukrain, Chernihiv",
    avatar: require("../assets/images/4.jpg"),
    social_networks: {
      facebook: "https://web.facebook.com/MinistryofHealthofCambodia",
      twitter: "https://web.facebook.com/MinistryofHealthofCambodia",
      linkedin: "https://web.facebook.com/MinistryofHealthofCambodia",
      instagram: "https://web.facebook.com/MinistryofHealthofCambodia",
      skypse: "https://web.facebook.com/MinistryofHealthofCambodia",
    },
    company: "Logical solutions",
    position: "frontend developer",
    isFavourite: false,
    isContact: false,
  },
  {
    id: 5,
    name: "Vibol Yoeung",
    city: "Ukrain, Chernivtsi",
    avatar: require("../assets/images/5.jpg"),
    social_networks: {
      facebook: "https://web.facebook.com/MinistryofHealthofCambodia",
      twitter: "https://web.facebook.com/MinistryofHealthofCambodia",
      linkedin: "https://web.facebook.com/MinistryofHealthofCambodia",
      instagram: "https://web.facebook.com/MinistryofHealthofCambodia",
      skypse: "https://web.facebook.com/MinistryofHealthofCambodia",
    },
    company: "VODWORKS",
    position: "Fullstack developer",
    isFavourite: false,
    isContact: false,
  },
  {
    id: 6,
    name: "Move Seng",
    city: "Ukrain, Donetsk",
    avatar: require("../assets/images/6.jpg"),
    social_networks: {
      facebook: "https://web.facebook.com/MinistryofHealthofCambodia",
      twitter: "https://web.facebook.com/MinistryofHealthofCambodia",
      linkedin: "https://web.facebook.com/MinistryofHealthofCambodia",
      instagram: "https://web.facebook.com/MinistryofHealthofCambodia",
      skypse: "https://web.facebook.com/MinistryofHealthofCambodia",
    },
    company: "VODWORKS",
    position: "Fullstack developer",
    isFavourite: false,
    isContact: false,
  },
  {
    id: 7,
    name: "Daniel Lion",
    city: "Ukrain, Kyiv",
    avatar: require("../assets/images/7.jpg"),
    social_networks: {
      facebook: "https://web.facebook.com/MinistryofHealthofCambodia",
      twitter: "https://web.facebook.com/MinistryofHealthofCambodia",
      linkedin: "https://web.facebook.com/MinistryofHealthofCambodia",
      instagram: "https://web.facebook.com/MinistryofHealthofCambodia",
      skypse: "https://web.facebook.com/MinistryofHealthofCambodia",
    },
    company: "Soft solutions",
    position: "frontend developer",
    isFavourite: false,
    isContact: false,
  },
  {
    id: 8,
    name: "Sothea Try",
    city: "Ukrain, Luhansk",
    avatar: require("../assets/images/8.jpg"),
    social_networks: {
      facebook: "https://web.facebook.com/MinistryofHealthofCambodia",
      twitter: "https://web.facebook.com/MinistryofHealthofCambodia",
      linkedin: "https://web.facebook.com/MinistryofHealthofCambodia",
      instagram: "https://web.facebook.com/MinistryofHealthofCambodia",
      skypse: "https://web.facebook.com/MinistryofHealthofCambodia",
    },
    company: "VODWORKS",
    position: "Fullstack developer",
    isFavourite: false,
    isContact: false,
  },
];
class HomeScreen extends React.Component {
  static navigationOptions = {};
  constructor(props, people) {
    super(props);

    this.state = {
      firstLaunch: null,
      condUpdate: null,
      people: props.people,
    };
  }

  render() {
    return (
      <View style={Styles.container}>
        <FlatList
          data={this.state.people}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => alert("Item Clicked")}
                style={{ marginLeft: 10 }}
              >
                <View style={Styles.containerItem}>
                  <Image
                    source={{ uri: item.avatar }}
                    style={Styles.thumbnail}
                  />
                  <View style={Styles.rightContainer}>
                    <Text style={Styles.title}>{item.name}</Text>
                    <Text style={Styles.position}>
                      {item.company}, {item.position}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people,
  };
};
export default connect(mapStateToProps, {})(HomeScreen);

//export default HomeScreen;
