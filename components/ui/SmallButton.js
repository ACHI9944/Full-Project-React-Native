import { Text, View } from "react-native";

function SmallButton({ text, textStyle }) {
  return (
    <View>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
}
export default SmallButton;
