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
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
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
  list: {
    width: "90%",
  },
  creators: {
    width: "90%",
    marginTop: 30,
    fontSize: 30,
    fontWeight: "500",
  },
});

export default HomeScreenStyle;
