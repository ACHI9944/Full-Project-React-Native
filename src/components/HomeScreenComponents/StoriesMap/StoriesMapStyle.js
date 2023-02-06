import { StyleSheet } from "react-native";

const StoriesMapStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: "500",
  },
  seeAll: {
    color: "#542ee0",
    fontWeight: "500",
    fontSize: 15,
  },
  storyView: {
    marginTop: 20,
    marginLeft: 15,
    height: 300,
    width: 160,
  },
});

export default StoriesMapStyle;
