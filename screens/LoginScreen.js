import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthForm from "../components/AuthForm";
import GradientText from "../components/ui/GradientText";
import SmallButton from "../components/ui/SmallButton";

function LoginScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.imageAndText}>
        <Image
          style={styles.image}
          source={require("../assets/318220879_704274267574962_4248918332260345559_n.png")}
        />

        <GradientText
          text={"instans.ai"}
          gradientColors={["#3a5bd9", "#02b3c9"]}
          textStyle={styles.gradientText}
        />
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  imageAndText: {
    alignItems: "center",
    marginTop: 70,
  },

  image: {
    width: 80,
    height: 80,
  },

  gradientText: {
    fontSize: 50,
    fontFamily: "bona-nova",
  },
  authForm: {
    width: "100%",
    marginBottom: 70,
  },
  bottomText: {
    flexDirection: "row",
  },
  smallText: {
    fontSize: 15,
    fontWeight: "600",
    marginHorizontal: 5,
  },
  smallButtonText: {
    color: "#06b2c9",
    fontWeight: "600",
    fontSize: 15,
  },
});
