import { Pressable, Text, View } from "react-native";

function SmallButton({ children, textStyle, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Text style={textStyle}>{children}</Text>
      </View>
    </Pressable>
  );
}
export default SmallButton;
