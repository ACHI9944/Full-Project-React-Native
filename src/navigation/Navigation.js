import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AuthContextProvider, {
  AuthContext,
} from "../components/store/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import AuthenticatedScreen from "../screens/AuthenticatedScreen/AuthenticatetScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="authenticated" component={AuthenticatedScreen} />
    </Stack.Navigator>
  );
}

function Navigation() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);
  if (isTryingLogin) {
    return <LoadingOverlay />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {!authCtx.isAuthenticated && <LoginStack />}
        {authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default Navigation;
