import { KeyboardAvoidingView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignupScreenStyle from "./SignupScreenStyle";
import SignupForm from "../../components/SignupForm/SignupForm";
import AbsoluteIconButton from "../../components/ui/AbsoluteIconButton";

const styles = SignupScreenStyle;

function SingupScreen({ navigation }) {
  function goBack() {
    navigation.navigate("login");
  }
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={styles.screen}>
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
          <SignupForm />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export default SingupScreen;
