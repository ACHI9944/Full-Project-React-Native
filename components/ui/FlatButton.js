import { Pressable, Text, View } from "react-native";

function FlatButton({ text, style }) {
  return (
    <Pressable style={style}>
      <View>
        <Text style={{ color: "white" }}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;
