import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupForm from "../components/SignupForm/SignupForm";
import SignupForm2 from "../components/SignupForm2/SignupForm2";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SingupScreen from "../screens/SingupScreen/SignupScreen";

const Stack = createNativeStackNavigator();
function SingupScreenhandler() {
  return (
    <SingupScreen
      navigateTo="login"
      largeText="Welcome!"
      smallText="Enter your account information first"
      SignupForm={SignupForm}
    />
  );
}
function SingupScreen2handler() {
  return (
    <SingupScreen
      navigateTo="singup"
      largeText="Well done!"
      smallText="Now,tell us more about your brand"
      SignupForm={SignupForm2}
    />
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="singup"
          component={SingupScreenhandler}
          options={{ headerShown: false, animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="singup2"
          component={SingupScreen2handler}
          options={{ headerShown: false, animation: "slide_from_bottom" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
