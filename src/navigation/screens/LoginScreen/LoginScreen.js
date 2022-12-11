import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthForm from "../../../components/AuthForm/AuthForm";
import GradientText from "../../../components/ui/GradientText";
import SmallButton from "../../../components/ui/SmallButton";
import LoginScreenStyle from "./LoginScreenStyle";

const styles = LoginScreenStyle;

function LoginScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.imageAndText}>
        <Image
          style={styles.image}
          source={require("../../../assets/318220879_704274267574962_4248918332260345559_n.png")}
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
        <SmallButton text={"Sign up"} textStyle={styles.smallButtonText} />
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
