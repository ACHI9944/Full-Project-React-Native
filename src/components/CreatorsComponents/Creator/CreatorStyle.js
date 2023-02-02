import { Platform, StyleSheet } from "react-native";

const CreatorStyle = StyleSheet.create({
  creator: {
    marginVertical: 15,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
  imageAndNames: {
    flexDirection: "row",
    alignItems: "center",
  },

  photo: {
    width: 75,
    height: 75,
    borderRadius: 180,
  },
  names: {
    marginLeft: 14,
    height: 50,
    justifyContent: "space-between",
  },

  name: {
    fontSize: 19,
    fontWeight: "700",
  },
  linkName: {
    fontSize: 13,
    fontWeight: "500",
    color: "#a6a6a6",
  },
  followers: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  followersText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#542ee0",
    marginVertical: 2,
  },
});

export default CreatorStyle;
