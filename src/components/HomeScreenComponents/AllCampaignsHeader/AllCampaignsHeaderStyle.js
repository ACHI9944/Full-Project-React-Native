import { StyleSheet } from "react-native";

const AllCampaignsHeaderStyle = StyleSheet.create({
  topBar: {
    marginTop: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
  },
  goBackText: {
    fontSize: 25,
    fontWeight: "500",
  },
  commands: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 75,
    alignItems: "center",
  },
});

export default AllCampaignsHeaderStyle;
