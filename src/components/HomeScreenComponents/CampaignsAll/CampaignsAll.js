import { Pressable, Text, View } from "react-native";
import ImagesMap from "../ImagesMap/ImagesMap";
import { MaterialIcons } from "@expo/vector-icons";
import CampaignsAllStyle from "./CampaignsAllStyle";

const styles = CampaignsAllStyle;

function CampaignsAll({ item }) {
  const { name, date, dateNum, people, totalReach } = item;

  const stringedDate = `${date.toString().slice(4, 7)} ${date.getFullYear()}`;
  const nameAndDate = `${name} ${stringedDate}`;
  const slicedName = `${nameAndDate.slice(0, 15)} ...`;
  const fixedName = nameAndDate.length > 15 ? slicedName : nameAndDate;

  return (
    <View style={styles.campaign}>
      <View style={styles.nameAndDate}>
        <Text style={styles.fixedNameAndDate}>{fixedName}</Text>
      </View>

      <Text style={styles.dateNum}>{dateNum}</Text>

      <ImagesMap people={people} innerStyle="CampaignsAll" />
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
            <Text style={styles.botLeftTxt}>Total Followers</Text>
          </View>
        </View>
        <Pressable style={styles.botRight}>
          <MaterialIcons name="arrow-right-alt" size={40} color="#542ee0" />
        </Pressable>
      </View>
    </View>
  );
}

export default CampaignsAll;
