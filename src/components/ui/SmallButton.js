import { Pressable, Text, View } from "react-native";

function SmallButton({ text, textStyle }) {
  return (
    <Pressable>
      <View>
        <Text style={textStyle}>{text}</Text>
      </View>
    </Pressable>
  );
}
export default SmallButton;
