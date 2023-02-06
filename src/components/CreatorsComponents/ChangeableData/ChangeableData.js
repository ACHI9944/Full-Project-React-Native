import { Pressable, Text, View } from "react-native";
import ChangeableDataStyle from "./ChangeableDataStyle";

const styles = ChangeableDataStyle;

function ChangeableData({ data, setData }) {
  return (
    <View style={styles.screen}>
      <Pressable
        style={[
          styles.textView,
          data === "Stories" ? styles.textViewChoshen : null,
        ]}
        onPress={() => setData("Stories")}
      >
        <Text
          style={[styles.text, data === "Stories" ? styles.textChosen : null]}
        >
          Stories
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.textView,
          data === "Posts" ? styles.textViewChoshen : null,
        ]}
        onPress={() => setData("Posts")}
      >
        <Text
          style={[styles.text, data === "Posts" ? styles.textChosen : null]}
        >
          Posts
        </Text>
      </Pressable>
      <Pressable
        style={[
          styles.textView,
          data === "Reels" ? styles.textViewChoshen : null,
        ]}
        onPress={() => setData("Reels")}
      >
        <Text
          style={[styles.text, data === "Reels" ? styles.textChosen : null]}
        >
          Reels
        </Text>
      </Pressable>
    </View>
  );
}

export default ChangeableData;
