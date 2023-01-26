import { StyleSheet } from "react-native";

const CreatorsMapStyle = StyleSheet.create({
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
  container: {
    padding: 4,
    marginVertical: 20,
    marginHorizontal: 15,
  },
  screen: {
    alignItems: "center",
    padding: 20,
    marginRight: 10,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
  },
  image: {
    borderRadius: 180,
    width: 50,
    height: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 5,
  },
  linkName: {
    fontSize: 13,
    fontWeight: "500",
    color: "#a6a6a6",
  },
  followers: {
    fontSize: 13,
    fontWeight: "500",
    color: "#542ee0",
    marginTop: 20,
    marginBottom: 5,
  },
});

export default CreatorsMapStyle;
