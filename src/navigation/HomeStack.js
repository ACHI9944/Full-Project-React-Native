import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenHeader from "../components/HomeScreenComponents/HomeScreenHeader/HomeScreenHeader";
import AllCampaignsScreen from "../screens/AllCampaignsScreen/AllCampaignsScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import CampaignScreen from "../screens/CampaignScreen/CampaignScreen";

import CampaignCreatorsScreen from "../screens/CampaignCreatorsScreen/CampaignCreatorsScreen";
import CreatorScreen from "../screens/CreatorScreen/CreatorScreen";
import CommonHeader from "../components/CommonComponents/CommonHeader/CommonHeader";
import PostsScreen from "../screens/PostsScreen/PostsScreen";

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
      <Stack.Screen
        name="Creator"
        component={CreatorScreen}
        options={({ route, navigation }) => ({
          header: () => (
            <CommonHeader
              header="Creator"
              route={route}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={({ route, navigation }) => ({
          header: () => (
            <CommonHeader
              header="Posts"
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
