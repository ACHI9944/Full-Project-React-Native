import { useContext } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import Campaign from "../../components/HomeScreenComponents/Campaigns/Campaign";
import DummyCampaigns from "../../components/DummyCampaigns";
import { AuthContext } from "../../store/auth-context";
import TopCreatorsMap from "../../components/HomeScreenComponents/TopCreatorsMap/TopCreatorsMap";
import SmallButton from "../../components/ui/SmallButton";
import HomeScreenStyle from "./HomeScreenStyle";
import ChangeableInsights from "../../components/HomeScreenComponents/ChangeableInsights/ChangeableInsights";

const styles = HomeScreenStyle;

function HomeScreen({ navigation }) {
  const authCtx = useContext(AuthContext);

  return (
    <View style={styles.mainScreen}>
      <ScrollView contentContainerStyle={styles.screen}>
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

        <TopCreatorsMap />
        <ChangeableInsights />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
