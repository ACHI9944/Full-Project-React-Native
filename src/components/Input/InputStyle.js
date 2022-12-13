import { StyleSheet } from "react-native";

const InputStyle = StyleSheet.create({
  input: {
    backgroundColor: "#fbfbfb",
    borderRadius: 4,
    width: "90%",
    height: 56,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: "center",
    marginBottom: 15,
    elevation: 2,
  },
  innerText: {
    fontWeight: "100",
    fontSize: 12,
  },
  errorInput: {
    borderWidth: 2,
    borderColor: "red",
  },
  correctInput: {
    borderWidth: 2,
    borderColor: "#59cada",
  },
  textInput: {
    fontSize: 18,
    fontWeight: "300",
  },
});

export default InputStyle;
