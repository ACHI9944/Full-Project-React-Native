import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllCampaignsHeader from "../components/HomeScreenComponents/AllCampaignsHeader/AllCampaignsHeader";
import AuthenticatedHeader from "../components/HomeScreenComponents/AuthenticatedHeader/AuthenticatedHeader";
import AllCampaignsScreen from "../screens/AllCampaignsScreen/AllCampaignsScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{
          header: () => <AuthenticatedHeader />,
        }}
      />
      <Stack.Screen
        name="AllCampaigns"
        component={AllCampaignsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
