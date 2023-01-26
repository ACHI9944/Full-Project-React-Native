import { ScrollView, Text, View } from "react-native";
import DummyCampaigns from "../../components/DummyCampaigns";
import CreatorsMap from "../../components/HomeScreenComponents/CreatorsMap/CreatorsMap";
import Searchbox from "../../components/HomeScreenComponents/Searchbox/Searchbox";
import StoriesMap from "../../components/HomeScreenComponents/StoriesMap/StoriesMap";
import SingleCampaignStyle from "./SingleCampaignStyle";

const styles = SingleCampaignStyle;

function SingleCampaign({ route, navigation }) {
  const selectedCampaign = DummyCampaigns.find(
    (item) => item.id === route.params.campaignId
  );
  const { creators } = selectedCampaign;

  function searchHandler(enteredText) {
    console.log(enteredText);
  }

  return (
    <View style={styles.screen}>
      <Searchbox onChangeText={searchHandler} placeholder="Search in content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoriesMap data={selectedCampaign} />
        <StoriesMap data={selectedCampaign} />
        <StoriesMap data={selectedCampaign} />
        <CreatorsMap data={creators} header="Creators" />
      </ScrollView>
    </View>
  );
}

export default SingleCampaign;
