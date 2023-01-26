import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookingsScreen from "../screens/BookingsScreen/BookingsScreen";
import CreatorsScreen from "../screens/CreatorsScreen/CreatorsScreen";
import InsightsScreen from "../screens/InsightsScreen/InsightsScreen";
import { Ionicons, Feather } from "@expo/vector-icons";

import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeStack from "./HomeStack";

const BottomTab = createBottomTabNavigator();
function BottomTabStack() {
  const getTabBarStyle = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    return routeName === "AllCampaigns" || routeName === "Campaign" ? 0 : 65;
  };
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "#59cada",
        headerShown: false,
        tabBarStyle: {
          height: getTabBarStyle(route),
          paddingBottom: 15,
        },
      })}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Creators"
        component={CreatorsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Insights"
        component={InsightsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabStack;
