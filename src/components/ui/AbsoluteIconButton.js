import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function AbsoluteIconButton({
  top,
  left,
  right,
  bottom,
  name,
  size,
  color,
  onPress,
}) {
  return (
    <Pressable
      style={{ position: "absolute", left: left, top: top }}
      onPress={onPress}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}

export default AbsoluteIconButton;
