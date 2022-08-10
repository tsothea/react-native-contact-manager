// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import "react-native-gesture-handler";
import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "./service/store";

import HomeScreen from "./pages/HomeScreen";
import FavoritesScreen from "./pages/FavoritesScreen";
import ContactsScreen from "./pages/ContactsScreen";
import PeopleScreen from "./pages/PeopleScreen";
import CompaniesScreen from "./pages/CompaniesScreen";
import SettingScreen from "./pages/SettingScreen";
import LogoutScreen from "./pages/LogoutScreen";
import { getPeople, getCompanies } from "./service";

// Import Custom Sidebar
import CustomSidebarMenu from "./layout/CustomSidebarMenu";
import Search from "./layout/Search";
import AddNewContact from "./layout/AddNewContact";
import reducer from "./service/reducer";
import { createStore } from "redux";

const Drawer = createDrawerNavigator();

const AppWrapper = () => {
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getPeople(dispatch);
    getCompanies(dispatch);
  });

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="Home"
          options={({ navigation }) => ({
            drawerLabel: "Home",
            drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
            headerRight: (props) => (
              <View
                style={{
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  flexDirection: "row",
                }}
              >
                <Search {...props} navigation={navigation}></Search>
                <AddNewContact
                  {...props}
                  navigation={navigation}
                ></AddNewContact>
              </View>
            ),
          })}
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Contacts"
          options={{
            drawerIcon: () => <AntDesign name="user" size={24} color="black" />,
            drawerLabel: "Contacts",
          }}
          component={ContactsScreen}
        />
        <Drawer.Screen
          name="Favorites"
          options={{
            drawerIcon: () => <AntDesign name="star" size={24} color="black" />,
            drawerLabel: "Favorites",
          }}
          component={FavoritesScreen}
        />
        <Drawer.Screen
          name="People"
          options={{
            drawerIcon: () => <AntDesign name="team" size={24} color="black" />,
            drawerLabel: "People",
          }}
          component={PeopleScreen}
        />
        <Drawer.Screen
          name="Companies"
          options={{
            drawerIcon: () => (
              <Entypo name="landline" size={24} color="black" />
            ),
            drawerLabel: "Companies",
          }}
          component={CompaniesScreen}
        />
        <Drawer.Screen
          name="Setting"
          options={{
            drawerIcon: () => (
              <AntDesign name="setting" size={24} color="black" />
            ),
            drawerLabel: "Setting",
          }}
          component={SettingScreen}
        />
        <Drawer.Screen
          name="Logout"
          options={{
            drawerIcon: () => (
              <AntDesign name="poweroff" size={24} color="black" />
            ),
            drawerLabel: "Logout",
          }}
          component={LogoutScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppWrapper;
