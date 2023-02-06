import { ScrollView, Text, View } from "react-native";
import DummyCampaigns from "../../components/DummyCampaigns";
import CreatorsMap from "../../components/HomeScreenComponents/CreatorsMap/CreatorsMap";
import Searchbox from "../../components/HomeScreenComponents/Searchbox/Searchbox";
import StoriesMap from "../../components/HomeScreenComponents/StoriesMap/StoriesMap";
import CampaignScreenStyle from "./CampaignScreenStyle";

const styles = CampaignScreenStyle;

function CampaignScreen({ route }) {
  const selectedCampaign = DummyCampaigns.find(
    (item) => item.id === route.params.campaignId
  );
  const { creators, id } = selectedCampaign;
  let slicedData = creators.slice(0, 7);

  function searchHandler(enteredText) {}

  return (
    <View style={styles.screen}>
      <Searchbox onChangeText={searchHandler} placeholder="Search in content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StoriesMap data={selectedCampaign} header="Stories" />
        <StoriesMap data={selectedCampaign} header="Reels" />
        <StoriesMap data={selectedCampaign} header="Posts" />
        <CreatorsMap data={slicedData} id={id} header="Creators" />
      </ScrollView>
    </View>
  );
}

export default CampaignScreen;
