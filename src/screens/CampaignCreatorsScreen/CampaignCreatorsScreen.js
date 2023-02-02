import { ScrollView, Text, View } from "react-native";
import Creator from "../../components/CreatorsComponents/Creator/Creator";
import DummyCampaigns from "../../components/DummyCampaigns";
import CampaignCreatorsScreenStyle from "./CampaignCreatorsScreenStyle";

const styles = CampaignCreatorsScreenStyle;

function CampaignCreatorsScreen({ route }) {
  const selectedCampaign = DummyCampaigns.find(
    (item) => item.id === route.params.campaignCreatorsId
  );
  const { creators } = selectedCampaign;

  return (
    <ScrollView style={styles.ScrollView}>
      {creators.map((item) => {
        return <Creator key={item.id} data={item} />;
      })}
    </ScrollView>
  );
}

export default CampaignCreatorsScreen;
