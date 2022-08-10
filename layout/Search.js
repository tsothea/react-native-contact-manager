import { Feather } from "@expo/vector-icons";

function Search({ navigation }) {
  return (
    <Feather
      name="search"
      size={22}
      color="black"
      style={{ marginRight: 5 }}
      onPress={() => navigation.navigate("Favorites")}
    />
  );
}

export default Search;
