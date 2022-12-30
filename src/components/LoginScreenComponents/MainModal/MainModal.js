import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Modal,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import AbsoluteIconButton from "../../ui/AbsoluteIconButton";
import LoadingOverlay from "../../ui/LoadingOverlay";
import { createUser } from "../../util/auth";
import SingupModalOne from "../SingupModalOne/SingupModalOne";
import SingupModalTwo from "../SingupModalTwo/SingupModalTwo";
import MainModalStyle from "./MainModalStyle";

const styles = MainModalStyle;

function MainModal({ modalIsShown, closeModalHandler }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const [showNextPage, setShowNextPage] = useState(false);
  const [values, setValues] = useState({});

  function goBack() {
    closeModalHandler();
    setShowNextPage(false);
  }
  function nextPage() {
    setShowNextPage(true);
  }

  const email = values.email;
  const password = values.password;

  async function submitInputs() {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
      setIsAuthenticating(false);
      closeModalHandler();
      setShowNextPage(false);
    } catch (error) {
      Alert.alert(
        "registration failed",
        "Could not create user, please check your input and try again later."
      );
      setIsAuthenticating(false);
    }
  }

  return (
    <Modal visible={modalIsShown} animationType="slide">
      {isAuthenticating ? (
        <LoadingOverlay />
      ) : (
        <SafeAreaView style={styles.safeareaView}>
          <KeyboardAvoidingView
            style={styles.keyboardAvoiding}
            behavior={"padding"}
          >
            <View style={styles.topBar}>
              <AbsoluteIconButton
                top={6}
                left={15}
                name="ios-chevron-down"
                size={24}
                color="black"
                onPress={goBack}
              />
              <Text style={styles.header}>Sign Up</Text>
            </View>
            {!showNextPage && (
              <SingupModalOne nextPage={nextPage} setValues={setValues} />
            )}
            {showNextPage && (
              <SingupModalTwo
                setValues={setValues}
                submitInputs={submitInputs}
              />
            )}
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
    </Modal>
  );
}

export default MainModal;
