import { Pressable, Text, View } from "react-native";

function FlatButton({ children, style, pressedStyle, buttonTextStyle }) {
  return (
    <Pressable
      onPress={() => {}}
      style={({ pressed }) => (pressed ? pressedStyle : style)}
    >
      <Text style={buttonTextStyle}>{children}</Text>
    </Pressable>
  );
}

export default FlatButton;
