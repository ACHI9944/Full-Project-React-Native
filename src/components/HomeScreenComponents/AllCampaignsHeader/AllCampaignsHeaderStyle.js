import { StyleSheet } from "react-native";

const AllCampaignsHeaderStyle = StyleSheet.create({
  topBar: {
    height: 100,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  goBack: {
    marginTop: 30,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  goBackText: {
    fontSize: 23,
    fontWeight: "500",
  },
  commands: {
    marginTop: 30,
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 75,
    alignItems: "center",
  },
});

export default AllCampaignsHeaderStyle;
