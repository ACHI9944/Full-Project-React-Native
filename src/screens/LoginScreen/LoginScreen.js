import { Image, KeyboardAvoidingView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GradientText from "../../components/ui/GradientText";
import SmallButton from "../../components/ui/SmallButton";
import AuthForm from "../../components/AuthForm/AuthForm";
import LoginScreenStyle from "./LoginScreenStyle";
import MainModal from "../../components/SingupModals/MainModal/MainModal";
import { useContext, useState } from "react";
import LoadingOverlay from "../../components/ui/LoadingOverlay";
import { AuthContext } from "../../components/store/auth-context";
import { login } from "../../components/util/auth";

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
      const token = await login(email, password);
      authCtx.authenticate(token);
      setIsAuthenticating(false);
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
          behavior={"padding"}
        >
          <View style={styles.imageAndText}>
            <Image
              style={styles.image}
              source={require("../../assets/318220879_704274267574962_4248918332260345559_n.png")}
            />
            <GradientText
              gradientColors={["#3a5bd9", "#02b3c9"]}
              textStyle={styles.gradientText}
            >
              instans.ai
            </GradientText>
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
