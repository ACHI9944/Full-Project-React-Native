import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatorsScreen from "../screens/CreatorsScreen/CreatorsScreen";

const Stack = createNativeStackNavigator();

function CreatorsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllCreators"
        component={CreatorsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default CreatorsStack;
