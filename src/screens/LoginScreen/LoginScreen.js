import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../../store/auth-context";
import { login } from "../../util/auth";
import LoginScreenStyle from "./LoginScreenStyle";
import MainModal from "../../components/LoginScreenComponents/MainModal/MainModal";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import LogoWithText from "../../components/LoginScreenComponents/LogoWithText/LogoWithText";
import SmallButton from "../../components/ui/SmallButton";
import AuthForm from "../../components/LoginScreenComponents/AuthForm/AuthForm";
const styles = LoginScreenStyle;

function LoginScreen() {
  const [modalIsShown, setModalIsShown] = useState(false);
  function singupHandler() {
    setModalIsShown(true);
  }
  function closeModalHandler() {
    setModalIsShown(false);
  }

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);
  async function manageInputHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const response = await login(email, password);
      setIsAuthenticating(false);
      const token = response.data.idToken;
      if (!!token) {
        authCtx.authenticate(token);
      } else return;
    } catch (error) {
      Alert.alert(
        "Authentication failed!",
        "Could not log you in. please check your credentials or try again later!"
      );
      setIsAuthenticating(false);
    }
  }
  if (isAuthenticating) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <MainModal
        modalIsShown={modalIsShown}
        closeModalHandler={closeModalHandler}
      />

      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === "android" ? "height" : "padding"}
        >
          <View style={styles.imageAndText}>
            <LogoWithText />
          </View>

          <View style={styles.authForm}>
            <AuthForm manageInputHandler={manageInputHandler} />
          </View>

          <View style={styles.bottomText}>
            <Text style={styles.smallText}>Don't have an account?</Text>
            <SmallButton
              onPress={singupHandler}
              textStyle={styles.smallButtonText}
            >
              Sign up
            </SmallButton>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

export default LoginScreen;
