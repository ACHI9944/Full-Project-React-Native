import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import DummyCampaigns from "../../DummyCampaigns";
import CommonHeaderStyle from "./CommonHeaderStyle";

const styles = CommonHeaderStyle;

function CommonHeader({ route, onPress, header }) {
  const selectedCampaign =
    route && DummyCampaigns.find((item) => item.id === route.params.campaignId);

  return (
    <View style={styles.topBar}>
      <Pressable onPress={onPress} style={styles.goBack}>
        <Ionicons name="md-chevron-back-outline" size={25} color="black" />
        <Text style={styles.goBackText}>
          {header === "Campaign" ? selectedCampaign.name : header}
        </Text>
      </Pressable>
    </View>
  );
}

export default CommonHeader;
