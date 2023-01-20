import { Pressable, Text, View } from "react-native";
import ImagesMap from "../ImagesMap/ImagesMap";
import CampaignStyle from "./CampaignsStyle";
import { MaterialIcons } from "@expo/vector-icons";
const styles = CampaignStyle;

function Campaign({ item }) {
  const { name, date, dateNum, people, totalReach } = item;

  const stringedDate = `${date.toString().slice(4, 7)} ${date.getFullYear()}`;
  const nameAndDate = `${name} ${stringedDate}`;
  const slicedName = `${nameAndDate.slice(0, 27)} ...`;
  const fixedName = nameAndDate.length > 27 ? slicedName : nameAndDate;

  return (
    <View style={styles.campaign}>
      <View style={styles.nameAndDate}>
        <Text style={styles.fixedNameAndDate}>{fixedName}</Text>
      </View>

      <Text style={styles.dateNum}>{dateNum}</Text>

      <ImagesMap people={people} />
      <View style={styles.botView}>
        <View style={styles.botLefts}>
          <View style={styles.botLeft}>
            <Text style={styles.botLeftNum}>{people.length}</Text>
            <Text style={styles.botLeftTxt}>Creators</Text>
          </View>
          <View style={styles.botLeft}>
            <Text style={styles.botLeftNum}>{`${totalReach
              .toString()
              .slice(0, 2)}k`}</Text>
            <Text style={styles.botLeftTxt}>Total reach</Text>
          </View>
        </View>
        <Pressable style={styles.botRight}>
          <MaterialIcons name="arrow-right-alt" size={40} color="#542ee0" />
        </Pressable>
      </View>
    </View>
  );
}

export default Campaign;
