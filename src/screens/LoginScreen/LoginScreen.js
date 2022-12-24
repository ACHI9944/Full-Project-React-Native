import { Image, KeyboardAvoidingView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GradientText from "../../components/ui/GradientText";
import SmallButton from "../../components/ui/SmallButton";
import AuthForm from "../../components/AuthForm/AuthForm";
import LoginScreenStyle from "./LoginScreenStyle";
import MainModal from "../../components/SingupModals/MainModal/MainModal";
import { useState } from "react";

const styles = LoginScreenStyle;

function LoginScreen() {
  const [modalIsShown, setModalIsShown] = useState(false);
  function singupHandler() {
    setModalIsShown(true);
  }
  function closeModalHandler() {
    setModalIsShown(false);
  }

  return (
    <>
      <MainModal
        modalIsShown={modalIsShown}
        closeModalHandler={closeModalHandler}
      />

      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={"height"}
      >
        <SafeAreaView style={styles.screen}>
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
            <AuthForm />
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
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}

export default LoginScreen;
