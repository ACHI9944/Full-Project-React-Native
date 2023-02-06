import { useContext } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import DummyCampaigns from "../../components/DummyCampaigns";
import { AuthContext } from "../../store/auth-context";
import SmallButton from "../../components/ui/SmallButton";
import HomeScreenStyle from "./HomeScreenStyle";
import ChangeableInsights from "../../components/HomeScreenComponents/ChangeableInsights/ChangeableInsights";
import CreatorsMap from "../../components/HomeScreenComponents/CreatorsMap/CreatorsMap";
import Campaign from "../../components/HomeScreenComponents/Campaign/Campaign";

const styles = HomeScreenStyle;

function HomeScreen({ navigation }) {
  const authCtx = useContext(AuthContext);

  let allCreators = [];
  DummyCampaigns.map((item) => {
    item.creators.map((item) => allCreators.push(item));
  });
  
  const sortedSlicedData = allCreators
    .sort((a, b) => b.followers - a.followers)
    .slice(0, 7);

  return (
    <View style={styles.mainScreen}>
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Button title="logOut" onPress={authCtx.logout} />
        </View>

        <View style={styles.headerView}>
          <Text style={styles.header}>My campaings</Text>
          <SmallButton
            onPress={() => navigation.navigate("AllCampaigns")}
            textStyle={styles.seeAll}
          >
            See all
          </SmallButton>
        </View>
        <View style={styles.list}>
          {DummyCampaigns.map((item) => (
            <Campaign item={item} key={item.id} />
          ))}
        </View>

        <CreatorsMap data={sortedSlicedData} header="Top Creators" />
        <ChangeableInsights />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
