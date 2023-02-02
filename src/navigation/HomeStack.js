import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenHeader from "../components/HomeScreenComponents/HomeScreenHeader/HomeScreenHeader";
import AllCampaignsScreen from "../screens/AllCampaignsScreen/AllCampaignsScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CampaignScreen from "../screens/CampaignScreen/CampaignScreen";
import CommonHeader from "../components/HomeScreenComponents/CommonHeader/CommonHeader";
import CampaignCreatorsScreen from "../screens/CampaignCreatorsScreen/CampaignCreatorsScreen";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          header: () => <HomeScreenHeader />,
        }}
      />
      <Stack.Screen
        name="AllCampaigns"
        component={AllCampaignsScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Campaign"
        component={CampaignScreen}
        options={({ route, navigation }) => ({
          header: () => (
            <CommonHeader
              header="Campaign"
              route={route}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="CampaignCreatorsScreen"
        component={CampaignCreatorsScreen}
        options={({ navigation }) => ({
          header: () => (
            <CommonHeader
              header="Creators"
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
