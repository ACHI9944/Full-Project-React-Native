import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import searchBoxStyle from "./SearchboxStyle";

const styles = searchBoxStyle;

function Searchbox({ onChangeText, placeholder }) {
  return (
    <View style={styles.searchBox}>
      <Ionicons name="md-search-outline" size={25} color="#959595" />
      <TextInput
        placeholder={placeholder}
        style={styles.searchInput}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default Searchbox;
