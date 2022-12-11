import { StyleSheet } from "react-native";

const InputStyle = StyleSheet.create({
  input: {
    backgroundColor: "#fbfbfb",
    borderRadius: 4,
    borderWidth: 0.5,
    width: "90%",
    height: 48,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: "center",
  },
  errorInput: {
    borderColor: "red",
  },
  textInput: {
    fontSize: 20,
  },
  errorMessageView: {
    width: "90%",
  },
  errorMessage: {
    color: "red",
    alignSelf: "stretch",
    marginTop: 3,
  },
});

export default InputStyle;
