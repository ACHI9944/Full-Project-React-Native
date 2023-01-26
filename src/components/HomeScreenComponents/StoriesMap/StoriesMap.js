import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import SmallButton from "../../ui/SmallButton";
import StoriesMapStyle from "./StoriesMapStyle";

const styles = StoriesMapStyle;
function StoriesMap({ data }) {
  const { creators, name } = data;
  const slicedCreators = creators.slice(0, 7);
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Stories</Text>

        <SmallButton onPress={() => {}} textStyle={styles.seeAll}>
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
            <ImageBackground
              key={+`${creator.id}${story.id}`}
              source={{ uri: story.story }}
              style={styles.imageView}
              imageStyle={styles.image}
            >
              <Image
                source={{ uri: creator.photo }}
                style={styles.profileImage}
              />
              <View style={styles.textsView}>
                <Text style={styles.creatornameText}>{creator.name}</Text>
                <Text style={styles.campaignNameText}>For: {name}</Text>
              </View>
            </ImageBackground>
          ))
        )}
      </ScrollView>
    </>
  );
}

export default StoriesMap;
