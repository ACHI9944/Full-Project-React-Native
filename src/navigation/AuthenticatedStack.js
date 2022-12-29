import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthenticatedHeader from "../components/AuthenticatedHeader/AuthenticatedHeader";
import BookingsScreen from "../screens/BookingsScreen/BookingsScreen";
import CreatorsScreen from "../screens/CreatorsScreen/CreatorsScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import InsightsScreen from "../screens/InsightsScreen/InsightsScreen";
import { Ionicons, Feather } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();
function AuthenticatedStack() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "#59cada",
        header: () => <AuthenticatedHeader />,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
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

export default AuthenticatedStack;
