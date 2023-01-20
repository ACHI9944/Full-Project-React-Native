import { StyleSheet } from "react-native";

const HomeScreenStyle = StyleSheet.create({
  mainScreen: {
    backgroundColor: "white",
  },
  screen: {
    alignItems: "center",
    backgroundColor: "white",
  },
  headerView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "500",
    marginHorizontal: 15,
  },
  seeAll: {
    color: "#542ee0",
    fontWeight: "500",
    fontSize: 15,
    marginHorizontal: 15,
  },
  list: {
    width: "100%",
  },
  creators: {
    width: "100%",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "500",
  },
});

export default HomeScreenStyle;
