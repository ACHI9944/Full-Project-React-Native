import { Platform, StyleSheet } from "react-native";

const CreatorsScreenHeaderStyle = StyleSheet.create({
  screen: {
    height: 100,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    paddingTop: 35,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 23,
    fontWeight: "500",
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    width: 70,
    justifyContent: "space-between",
  },
});

export default CreatorsScreenHeaderStyle;
