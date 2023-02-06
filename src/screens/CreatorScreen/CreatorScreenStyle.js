import { Platform, StyleSheet } from "react-native";

const CreatorScreenStyle = StyleSheet.create({
  ScrollView: {
    backgroundColor: "white",
  },
  backImageView: {
    marginHorizontal: 3,
    marginTop: 5,
    height: 340,
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    borderTopEndRadius: 10,
  },

  backImage: {
    borderTopEndRadius: 10,
  },
  creator: {
    alignItems: "center",
    marginTop: 80,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 15,
  },
  imageView: {
    marginTop: -50,
    width: 100,
    height: 100,
    borderRadius: 180,
    padding: 2,
    backgroundColor: "white",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 180,
  },
  name: {
    fontWeight: "600",
    fontSize: 17,
    marginBottom: 5,
  },
  linkName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#a6a6a6",
    marginBottom: 10,
  },
  data: {
    flexDirection: "row",
    marginTop: 20,
  },
  dataElement: {
    margin: 20,
    alignItems: "center",
  },
  upperText: {
    fontWeight: "600",
    fontSize: 17,
  },
  lowerText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#a6a6a6",
  },
  posts: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: "white",
  },
  campNameAndIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 15,
  },
  campaignName: {
    fontWeight: "600",
    fontSize: 18,
  },
  stories: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: 15,
  },
  storyView: {
    width: "48%",
    height: 300,
    marginVertical: 5,
  },
});

export default CreatorScreenStyle;
