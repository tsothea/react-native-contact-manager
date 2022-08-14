import "react-native-gesture-handler";
import * as React from "react";
import { Button, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Search = (props) => {
  const navigate = useNavigate();
  console.log(props.navigation.navigate);
  return (
    <View style={{ marginRight: 20, flexDirection: "row" }}>
      <TextInput
        placeholder="Search"
        style={{ width: 250, borderWidth: 1, padding: 5 }}
      />
      <Button
        title="Cancel"
        style={{ width: 80 }}
        onPress={navigate.navigate(-1)}
      />
    </View>
  );
};

export default Search;
