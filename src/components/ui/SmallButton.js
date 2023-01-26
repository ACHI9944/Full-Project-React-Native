import { Pressable, Text, View } from "react-native";

function SmallButton({ children, textStyle, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
}
export default SmallButton;
