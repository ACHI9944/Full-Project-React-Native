import { Platform, StyleSheet } from "react-native";

const SingleCampaignHeaderStyle = StyleSheet.create({
  topBar: {
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
  },
  goBack: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  goBackText: {
    fontSize: 23,
    fontWeight: "500",
  },
});

export default SingleCampaignHeaderStyle;
