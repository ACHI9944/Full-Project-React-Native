import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import NumberSlicer from "../../ui/NumberSlicer";
import CreatorStyle from "./CreatorStyle";
const styles = CreatorStyle;

function Creator({ data }) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.creator}
      onPress={() => navigation.navigate("Creator", { creatorId: data.id })}
    >
      <View style={styles.imageAndNames}>
        <Image source={{ uri: data.photo }} style={styles.photo} />
        <View style={styles.names}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.linkName}>{data.linkName}</Text>
        </View>
      </View>
      <View style={styles.followers}>
        <Text style={styles.followersText}>{NumberSlicer(data.followers)}</Text>
        <Text style={styles.followersText}>Followers</Text>
      </View>
    </Pressable>
  );
}

export default Creator;
