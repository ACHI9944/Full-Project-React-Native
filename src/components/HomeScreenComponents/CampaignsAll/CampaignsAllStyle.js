import { Platform, StyleSheet } from "react-native";

const CampaignsAllStyle = StyleSheet.create({
  campaign: {
    width: '44.5%',
    marginLeft: 15,
    marginVertical: 7,
    borderRadius: 7,
    padding: 5,
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
  fixedNameAndDate: {
    fontSize: 17,
    fontWeight: "600",
  },
  dateNum: {
    fontSize: 13,
    fontWeight: "500",
    color: "#a6a6a6",
  },
  botView: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  botLefts: {
    flexDirection: "row",
  },
  botLeft: {
    marginRight: 10,
  },
  botLeftNum: {
    fontSize: 16,
    fontWeight: "600",
  },
  botLeftTxt: {
    fontSize: 13,
    fontWeight: "500",
    color: "#a6a6a6",
  },
  botRight: {
    alignSelf: "flex-end",
    marginBottom: 5,
  },
});

export default CampaignsAllStyle;
