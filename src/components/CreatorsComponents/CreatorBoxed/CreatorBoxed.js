import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text } from "react-native";
import NumberSlicer from "../../ui/NumberSlicer";
import CreatorBoxedStyle from "./CreatorBoxedStyle";

const styles = CreatorBoxedStyle;

function CreatorBoxed({ data }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.screen}
      onPress={() => navigation.navigate("Creator", { creatorId: data.id })}
    >
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
