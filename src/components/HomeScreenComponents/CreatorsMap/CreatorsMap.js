import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import CreatorBoxed from "../../CreatorsComponents/CreatorBoxed/CreatorBoxed";

import SmallButton from "../../ui/SmallButton";
import CreatorsMapStyle from "./CreatorsMapStyle";

const styles = CreatorsMapStyle;
function CreatorsMap({ data, header, id }) {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{header}</Text>
        {header === "Creators" ? (
          <SmallButton
            onPress={() =>
              navigation.navigate("CampaignCreatorsScreen", {
                campaignCreatorsId: id,
              })
            }
            textStyle={styles.seeAll}
          >
            See all
          </SmallButton>
        ) : null}
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        horizontal
      >
        {data.map((item) => (
          <View key={item.id}>
            <CreatorBoxed data={item} />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

export default CreatorsMap;
