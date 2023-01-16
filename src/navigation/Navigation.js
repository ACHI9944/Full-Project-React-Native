import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import AuthenticatedStack from "./AuthenticatedStack";

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
    <>
      {!authCtx.isAuthenticated && <LoginScreen />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </>
  );
}

export default Navigation;
