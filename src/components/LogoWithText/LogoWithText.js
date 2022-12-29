import { Image } from "react-native";
import GradientText from "../ui/GradientText";
import LoginWithTextStyle from "./LogoWithTextStyle";

const styles = LoginWithTextStyle;
function LogoWithText() {
  return (
    <>
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
    </>
  );
}

export default LogoWithText;
