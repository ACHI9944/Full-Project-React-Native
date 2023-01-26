import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenHeader from "../components/HomeScreenComponents/HomeScreenHeader/HomeScreenHeader";
import SingleCampaignHeader from "../components/HomeScreenComponents/SingleCampaignHeader/SingleCampaignHeader";
import AllCampaignsScreen from "../screens/AllCampaignsScreen/AllCampaignsScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SingleCampaign from "../screens/SingleCampaign/SingleCampaign";

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
        component={SingleCampaign}
        options={({ route, navigation }) => ({
          header: () => (
            <SingleCampaignHeader
              route={route}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
