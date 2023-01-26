import { Image, Pressable, ScrollView, Text, View } from "react-native";
import SmallButton from "../../ui/SmallButton";
import CreatorsMapStyle from "./CreatorsMapStyle";

const styles = CreatorsMapStyle;
function CreatorsMap({ data, header }) {
  let slicedData = header === "Creators" ? data.slice(0, 7) : data;
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{header}</Text>
        {header === "Creators" ? (
          <SmallButton onPress={() => {}} textStyle={styles.seeAll}>
            See all
          </SmallButton>
        ) : null}
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        horizontal
      >
        {slicedData.map((item) => (
          <Pressable key={item.id} style={styles.screen} onPress={() => {}}>
            <Image source={{ uri: item.photo }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.linkName}>{item.linkName}</Text>
            <Text style={styles.followers}>{`${item.followers
              .toString()
              .slice(0, 2)}k Followers`}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
}

export default CreatorsMap;
