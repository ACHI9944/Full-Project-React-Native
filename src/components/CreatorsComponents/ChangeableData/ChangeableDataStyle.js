import { StyleSheet } from "react-native";

const ChangeableDataStyle = StyleSheet.create({
  screen: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 15,
    marginTop: 5,
  },
  textView: {
    borderBottomWidth: 1,
    width: "33.4%",
    borderBottomColor: "#a6a6a6",
    alignItems: "center",
    padding: 15,
    borderBottomEndRadius: 1.5,
  },
  textViewChoshen: {
    borderBottomWidth: 3,
    borderBottomColor: "#542ee0",
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    color: "#a6a6a6",
  },
  textChosen: {
    color: "#542ee0",
  },
});
export default ChangeableDataStyle;
