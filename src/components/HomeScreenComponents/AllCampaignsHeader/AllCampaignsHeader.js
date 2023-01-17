import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import AllCampaignsHeaderStyle from "./AllCampaignsHeaderStyle";
const styles = AllCampaignsHeaderStyle;

function AllCampaignsHeader({ onPress }) {
  return (
    <View style={styles.topBar}>
      <Pressable onPress={onPress} style={styles.goBack}>
        <Ionicons name="md-chevron-back-outline" size={33} color="black" />
        <Text style={styles.goBackText}>Campaigns</Text>
      </Pressable>
      <View style={styles.commands}>
        <Ionicons name="swap-vertical" size={33} color="black" />
        <Ionicons name="reorder-three-outline" size={33} color="black" />
      </View>
    </View>
  );
}

export default AllCampaignsHeader;
