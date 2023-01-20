import { Image, ScrollView, Text, View } from "react-native";
import TopCreators from "../../TopCreators";
import TopCreatorsMapStyle from "./TopCreatorsMapStyle";

const styles = TopCreatorsMapStyle;
function TopCreatorsMap() {
  return (
    <>
      <Text style={styles.creators}>Top Creators</Text>
      <ScrollView contentContainerStyle={styles.container} horizontal>
        {TopCreators.map((item) => (
          <View key={item.id} style={styles.screen}>
            <Image source={{ uri: item.photo }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.linkName}>{item.linkName}</Text>
            <Text style={styles.followers}>{`${item.followers
              .toString()
              .slice(0, 2)}k Followers`}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

export default TopCreatorsMap;
