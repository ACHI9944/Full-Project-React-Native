import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingupContextProvider from "../context/Singup-Context";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <SingupContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SingupContextProvider>
  );
}

export default Navigation;
