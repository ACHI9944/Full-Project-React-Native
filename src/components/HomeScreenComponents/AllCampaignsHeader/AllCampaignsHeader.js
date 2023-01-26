import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import AllCampaignsHeaderStyle from "./AllCampaignsHeaderStyle";
const styles = AllCampaignsHeaderStyle;

function AllCampaignsHeader({ onPress, onChangeSize, boxed, onOpenSortModal }) {
  return (
    <View style={styles.topBar}>
      <Pressable onPress={onPress} style={styles.goBack}>
        <Ionicons name="md-chevron-back-outline" size={25} color="black" />
        <Text style={styles.goBackText}>Campaigns</Text>
      </Pressable>
      <View style={styles.commands}>
        <Ionicons
          name="swap-vertical"
          size={25}
          color="black"
          onPress={onOpenSortModal}
        />
        <Ionicons
          name={boxed ? "list-outline" : "md-grid-outline"}
          size={25}
          color="black"
          onPress={onChangeSize}
        />
      </View>
    </View>
  );
}

export default AllCampaignsHeader;
