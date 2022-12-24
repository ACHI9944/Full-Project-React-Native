import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

function CurrencyIcon() {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ionicons name="chevron-up" size={20} color="black" />
      <Ionicons name="chevron-down" size={20} color="black" />
    </View>
  );
}

export default CurrencyIcon;
