import { Image, ScrollView, Text, View } from "react-native";
import TopCreators from "../TopCreators";
import TopCreatorsMapStyle from "./TopCreatorsMapStyle";

const styles = TopCreatorsMapStyle;
function TopCreatorsMap() {
  return (
    <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
      {TopCreators.map((item) => (
        <View key={item.id}>
          <Image source={{ uri: item.photo }} style={styles.image} />
          <Text>{item.name}</Text>
          <Text>{item.linkName}</Text>
          <Text>{`${item.followers.toString().slice(0, 2)}k`}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

export default TopCreatorsMap;
