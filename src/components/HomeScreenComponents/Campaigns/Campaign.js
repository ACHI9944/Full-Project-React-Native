import { Pressable, Text, View } from "react-native";
import ImagesMap from "../ImagesMap/ImagesMap";
import CampaignStyle from "./CampaignsStyle";
import { MaterialIcons } from "@expo/vector-icons";
import NumberSlicer from "../../ui/NumberSlicer";
import { useNavigation } from "@react-navigation/native";
const styles = CampaignStyle;

function Campaign({ item }) {
  const navigation = useNavigation();
  const { id, name, date, dateNum, creators } = item;

  const stringedDate = `${date.toString().slice(4, 7)} ${date.getFullYear()}`;
  const nameAndDate = `${name} ${stringedDate}`;
  const slicedName = `${nameAndDate.slice(0, 27)} ...`;
  const fixedName = nameAndDate.length > 27 ? slicedName : nameAndDate;

  const totalFollowers = creators.reduce((accumulator, object) => {
    return accumulator + object.followers;
  }, 0);

  return (
    <View style={styles.campaign}>
      <View style={styles.nameAndDate}>
        <Text style={styles.fixedNameAndDate}>{fixedName}</Text>
      </View>

      <Text style={styles.dateNum}>{dateNum}</Text>

      <ImagesMap creators={creators} />
      <View style={styles.botView}>
        <View style={styles.botLefts}>
          <View style={styles.botLeft}>
            <Text style={styles.botLeftNum}>{creators.length}</Text>
            <Text style={styles.botLeftTxt}>Creators</Text>
          </View>
          <View style={styles.botLeft}>
            <Text style={styles.botLeftNum}>
              {NumberSlicer(totalFollowers)}
            </Text>
            <Text style={styles.botLeftTxt}>Total reach</Text>
          </View>
        </View>
        <Pressable style={styles.botRight}>
          <MaterialIcons
            name="arrow-right-alt"
            size={40}
            color="#542ee0"
            onPress={() => navigation.navigate("Campaign", { campaignId: id })}
          />
        </Pressable>
      </View>
    </View>
  );
}

export default Campaign;
