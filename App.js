import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoadingOverlay from "./components/ui/LoadingOverlay";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "bona-nova": require("./assets/fonts/BonaNova-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

