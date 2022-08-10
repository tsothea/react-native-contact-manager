import { AntDesign } from "@expo/vector-icons";
import Favorites from "../pages/FavoritesScreen";

function AddNewContact({ navigation }) {
  const Favorites = () => {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  };
  return (
    <AntDesign
      name="adduser"
      size={24}
      color="black"
      style={{ marginRight: 5 }}
      onPress={() => navigation.navigate("Favorites")}
    />
  );
}

export default AddNewContact;
