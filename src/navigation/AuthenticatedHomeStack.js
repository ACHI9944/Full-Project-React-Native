import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticatedHeader from "../components/HomeScreenComponents/AuthenticatedHeader/AuthenticatedHeader";
import AllCampaignsScreen from "../screens/AllCampaignsScreen/AllCampaignsScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

const HomeStack = createNativeStackNavigator();

function AuthenticatedHomeStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
      <HomeStack.Screen
        name="AllCampaigns"
        component={AllCampaignsScreen}
        options={{
          headerShown: false,
          presentation: "fullScreenModal",
          animation: "none",
        }}
      />
    </HomeStack.Navigator>
  );
}

export default AuthenticatedHomeStack;
