import { useState } from "react";
import { KeyboardAvoidingView, Modal, Text, View } from "react-native";
import AbsoluteIconButton from "../../ui/AbsoluteIconButton";
import SingupModalOne from "../SingupModalOne/SingupModalOne";
import SingupModalTwo from "../SingupModalTwo/SingupModalTwo";
import MainModalStyle from "./MainModalStyle";

const styles = MainModalStyle;

function MainModal({ modalIsShown, closeModalHandler }) {
  const [showNextPage, setShowNextPage] = useState(false);

  function goBack() {
    closeModalHandler();
  }
  function nextPage() {
    setShowNextPage(true);
  }
  return (
    <Modal visible={modalIsShown} animationType="slide">
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : null}
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
        {!showNextPage && <SingupModalOne nextPage={nextPage} />}
        {showNextPage && <SingupModalTwo />}
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default MainModal;
