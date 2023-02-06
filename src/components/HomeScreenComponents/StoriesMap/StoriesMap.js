import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import Story from "../../CommonComponents/Story/Story";
import SmallButton from "../../ui/SmallButton";
import StoriesMapStyle from "./StoriesMapStyle";

const styles = StoriesMapStyle;
function StoriesMap({ data, header }) {
  const navigation = useNavigation();
  const { creators, name, id } = data;
  const slicedCreators = creators.slice(0, 3);
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{header}</Text>

        <SmallButton
          onPress={() =>
            navigation.navigate("Posts", { campaignId: id, data: header })
          }
          textStyle={styles.seeAll}
        >
          See all
        </SmallButton>
      </View>
      <ScrollView
        contentContainerStyle={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {slicedCreators.map((creator) =>
          creator.stories.map((story) => (
            <View key={+`${creator.id}${story.id}`} style={styles.storyView}>
              <Story story={story} name={name} creator={creator} />
            </View>
          ))
        )}
      </ScrollView>
    </>
  );
}

export default StoriesMap;
