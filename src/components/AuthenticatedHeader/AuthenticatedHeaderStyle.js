import { StyleSheet } from "react-native";

const AuthenticatedHeaderStyle = StyleSheet.create({
  screen: {
    height: 100,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
  },
  imageView: {
    width: 35,
    height: 35,
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 180,
  },
  iconsView: {
    alignItems: "center",
    flexDirection: "row",
    width: "22%",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});
export default AuthenticatedHeaderStyle;
