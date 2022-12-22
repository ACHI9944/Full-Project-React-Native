import { useContext } from "react";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Modal,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SingupContext } from "../../../context/Singup-Context";
import Input from "../../Input/Input";
import AbsoluteIconButton from "../../ui/AbsoluteIconButton";
import FlatButton from "../../ui/FlatButton";
import {
  emailValidation,
  nameValidation,
  phoneValidation,
} from "../../ui/Validation";
import SingupModalOneStyle from "./SingupModalOneStyle";

const styles = SingupModalOneStyle;

function SingupModalOne() {
  const { control, handleSubmit, formState, watch } = useForm();
  const businessName = watch("businessName");
  const phone = watch("phone");
  const email = watch("Email");

  const authCtx = useContext(SingupContext);
  function goBack() {
    authCtx.ToggleSingupOne();
  }
  function manageInputHandler(data) {
    authCtx.ToggleSingupOne();
    authCtx.ToggleSingupTwo();
  }
  return (
    <Modal visible={authCtx.singupOneIsVisible} animationType="slide">
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <SafeAreaView style={styles.safeAreaView}>
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
            <View style={styles.texts}>
              <Text style={styles.welcomeText}>Welcome!</Text>
              <Text style={styles.infoText}>
                Enter your account information first
              </Text>
            </View>
          </View>

          <View style={styles.signupForm}>
            <ScrollView
              contentContainerStyle={styles.screencontent}
              style={styles.screen}
            >
              <View style={styles.inputs}>
                <Input
                  name="businessName"
                  placeholder="Business name"
                  keyboardType="default"
                  control={control}
                  isValid={nameValidation(businessName)}
                  rules={{
                    validate: (value) => nameValidation(value),
                  }}
                />
                <Input
                  name="phone"
                  placeholder="Phone number"
                  keyboardType="numbers-and-punctuation"
                  control={control}
                  isValid={phoneValidation(phone)}
                  rules={{
                    validate: (value) => phoneValidation(value),
                  }}
                />
                <Input
                  name="Email"
                  placeholder="Email address"
                  keyboardType="email-address"
                  control={control}
                  isValid={emailValidation(email)}
                  rules={{
                    validate: (value) => emailValidation(value),
                  }}
                />
              </View>
              <FlatButton
                disabled={!formState.isValid}
                onPress={handleSubmit(manageInputHandler)}
                style={[styles.button, formState.isValid && styles.validStyle]}
                pressedStyle={styles.pressedStyle}
                buttonTextStyle={styles.buttonTextStyle}
              >
                Next
              </FlatButton>
            </ScrollView>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default SingupModalOne;
