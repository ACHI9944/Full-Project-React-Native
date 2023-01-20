import { StyleSheet } from "react-native";

const sortModalStyle = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    fontSize: 17,
    fontWeight: "300",
    color: "#bfbfbf",
    marginTop: 20,
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#bfbfbf",
    paddingVertical: 20,
  },
  selectText: {
    fontSize: 19,
    fontWeight: "500",
  },
  cancel: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  cancelText: {
    color: "#542ee0",
    fontSize: 18,
    fontWeight: "400",
  },
});

export default sortModalStyle;
