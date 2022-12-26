import { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthContext } from "../../components/store/auth-context";

function AuthenticatedScreen() {
  const authCtx = useContext(AuthContext);
  return (
    <View>
      <View>
        <Button title="logOut" onPress={authCtx.logout} />
      </View>
    </View>
  );
}

export default AuthenticatedScreen;
