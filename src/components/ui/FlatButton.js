import { Pressable, Text } from "react-native";

function FlatButton({
  children,
  style,
  pressedStyle,
  buttonTextStyle,
  onPress,
  disabled,
}) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => (pressed ? pressedStyle : style)}
    >
      <Text style={buttonTextStyle}>{children}</Text>
    </Pressable>
  );
}

export default FlatButton;
