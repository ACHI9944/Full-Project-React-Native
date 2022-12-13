import { KeyboardAvoidingView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignupScreenStyle from "./SignupScreenStyle";
import AbsoluteIconButton from "../../components/ui/AbsoluteIconButton";
import { useNavigation } from "@react-navigation/native";

const styles = SignupScreenStyle;

function SingupScreen({ largeText, smallText, SignupForm, navigateTo }) {
  const navigation = useNavigation();
  function goBack() {
    navigation.navigate(navigateTo);
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
            <Text style={styles.welcomeText}>{largeText}</Text>
            <Text style={styles.infoText}>{smallText}</Text>
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
