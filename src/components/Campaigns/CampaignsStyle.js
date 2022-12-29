import { Platform, StyleSheet } from "react-native";

const CampaignStyle = StyleSheet.create({
  campaign: {
    width: "100%",
    marginVertical: 7,
    borderRadius: 7,
    padding: 10,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
  },
  nameAndDate: {
    flexDirection: "row",
    marginVertical: 5,
  },
  name: {
    fontSize: 23,
    fontWeight: "500",
  },
  date: {
    fontSize: 23,
    fontWeight: "500",
  },
  dateNum: {
    fontSize: 15,
    fontWeight: "500",
    color: "#a6a6a6",
  },
  botView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  botLefts: {
    flexDirection: "row",
  },
  botLeft: {
    marginRight: 20,
  },
  botLeftNum: {
    fontSize: 15,
    fontWeight: "500",
  },
  botLeftTxt: {
    fontSize: 15,
    fontWeight: "500",
    color: "#a6a6a6",
  },
});

export default CampaignStyle;
