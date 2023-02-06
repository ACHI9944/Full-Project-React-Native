import { ScrollView, Text, View } from "react-native";
import Story from "../../components/CommonComponents/Story/Story";
import DummyCampaigns from "../../components/DummyCampaigns";
import PostsScreenStyle from "./PostsScreenStyle";

const styles = PostsScreenStyle;
function PostsScreen({ route }) {
  /* route.params.campaignId, route.params.data */
  const selectedCampaign = DummyCampaigns.find(
    (item) => item.id === route.params.campaignId
  );
  /* let stories = [];
  selectedCampaign.creators.map((creator) => {
    creator.stories.map((story) => stories.push({ story, creator }));
  });
  console.log(stories); */

  return (
    <ScrollView style={styles.screen}>
      {selectedCampaign.creators.map((creator) =>
        creator.stories.map((story) => (
          <View key={+`${creator.id}${story.id}`} style={styles.storyView}>
            <Story
              story={story}
              name={selectedCampaign.name}
              creator={creator}
            />
          </View>
        ))
      )}
    </ScrollView>
  );
}

export default PostsScreen;
