import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommonHeader from "../components/CommonComponents/CommonHeader/CommonHeader";
import CreatorScreen from "../screens/CreatorScreen/CreatorScreen";
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
    </Stack.Navigator>
  );
}

export default CreatorsStack;
