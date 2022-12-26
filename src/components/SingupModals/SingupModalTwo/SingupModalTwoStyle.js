import { Platform, StyleSheet } from "react-native";

const SingupModalTwoStyle = StyleSheet.create({
  texts: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  largeText: {
    fontSize: 35,
    fontWeight: "500",
  },
  smallText: {
    fontSize: 17,
    fontWeight: "400",
  },
  signupForm: {
    flex: 4.5,
    alignItems: "center",
  },
  scrollContent: {
    alignItems: "center",
    flexDirection: "column",
  },
  scrollStyle: {
    width: "100%",
    height: "100%",
  },
  inputs: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  details: {
    width: "90%",
    paddingVertical: 20,
  },
  detailsText: {
    fontSize: 20,
    fontWeight: "200",
  },
  button: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  pressedStyle: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 56,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    marginTop: 20,
  },
  validStyle: {
    backgroundColor: "#542ee0",
  },
  buttonTextStyle: {
    color: "white",
    fontSize: 17,
  },
  businessType: {
    width: "90%",
    height: 56,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginBottom: 15,
    backgroundColor: "#fbfbfb",
    justifyContent: "center",
  },
  businessTypeText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#bfbfbf",
  },
  chosenBusiness: {
    fontSize: 18,
    fontWeight: "300",
  },
  modalInnerText: {
    fontWeight: "100",
    fontSize: 12,
  },
  businessModal: {
    backgroundColor: "#eaeaea",
  },
  budgetInputs: {
    width: "90%",
    flexDirection: "row",
  },
  budget: {
    flex: 4,
  },
  currency: {
    flex: 1,
    height: 56,
    margin: 0,
    paddingVertical: 3,
    backgroundColor: "#fbfbfb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  currencyText: {
    fontSize: 18,
    fontWeight: "300",
  },
  currencyModal: {
    backgroundColor: "#eaeaea",
  },
  terms: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  checkBox: {
    borderWidth: 1.2,
    borderColor: "#bbaaf3",
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  agree: {
    width: "90%",
    paddingVertical: 10,
    color: "#bbaaf3",
    fontSize: 17,
    fontWeight: "200",
    marginLeft: 30,
  },
});

export default SingupModalTwoStyle;
