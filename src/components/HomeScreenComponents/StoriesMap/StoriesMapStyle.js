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
  imageView: {
    marginTop: 20,
    marginLeft: 15,
    height: 300,
    width: 160,
    flexDirection: "row",
    borderRadius: 10,
  },
  image: {
    borderRadius: 5,
  },
  profileImage: {
    width: 33,
    height: 33,
    borderRadius: 180,
    marginHorizontal: 5,
    marginTop: 25,
  },
  textsView: {
    height: 37,
    marginTop: 22,
    justifyContent: "space-between",
  },
  creatornameText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  campaignNameText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default StoriesMapStyle;
