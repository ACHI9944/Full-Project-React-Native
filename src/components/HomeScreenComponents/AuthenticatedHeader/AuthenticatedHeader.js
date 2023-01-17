import { Ionicons } from "@expo/vector-icons";
import { Image, SafeAreaView, View } from "react-native";
import AuthenticatedHeaderStyle from "./AuthenticatedHeaderStyle";

const styles = AuthenticatedHeaderStyle;

function AuthenticatedHeader() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={require("../../../assets/318220879_704274267574962_4248918332260345559_n.png")}
        />
      </View>
      <View style={styles.iconsView}>
        <Ionicons name="search-outline" size={30} color="black" />
        <Ionicons name="ios-notifications-outline" size={30} color="black" />
      </View>
    </SafeAreaView>
  );
}

export default AuthenticatedHeader;
