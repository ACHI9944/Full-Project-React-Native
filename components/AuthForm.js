import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import FlatButton from "./ui/FlatButton";

function AuthForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  let isFilling = enteredEmail.length > 0;

  function emailChangeHandler(value) {
    setEnteredEmail(value);
  }

  return (
    <View style={styles.authForm}>
      <View
        style={[
          styles.input,
          isFilling ? { justifyContent: "flex-start" } : null,
        ]}
      >
        {isFilling ? <Text style={styles.smallText}>Email Address</Text> : null}
        <TextInput
          placeholder="Email address"
          style={styles.textInput}
          keyboardType="email-address"
          onChangeText={emailChangeHandler}
          value={enteredEmail}
        />
      </View>

      <FlatButton
        text={"Log in"}
        style={[
          styles.button,
          isFilling ? { backgroundColor: "#542ee0" } : null,
        ]}
      />
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  authForm: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fbfbfb",
    borderRadius: 4,
    borderWidth: 0.5,
    width: "90%",
    marginBottom: 24,
    height: 48,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: "center",
  },
  smallText: {
    marginBottom: 5,
    fontWeight: "100",
    fontSize: 10,
  },
  textInput: {
    fontSize: 17,
  },
  button: {
    backgroundColor: "#bbaaf3",
    width: "90%",
    height: 48,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});
