import { Image, Pressable, Text } from "react-native";
import NumberSlicer from "../../ui/NumberSlicer";
import CreatorBoxedStyle from "./CreatorBoxedStyle";

const styles = CreatorBoxedStyle;

function CreatorBoxed({ data }) {
  return (
    <Pressable style={styles.screen} onPress={() => {}}>
      <Image source={{ uri: data.photo }} style={styles.image} />
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.linkName}>{data.linkName}</Text>
      <Text style={styles.followers}>{`${NumberSlicer(
        data.followers
      )} Followers`}</Text>
    </Pressable>
  );
}

export default CreatorBoxed;
