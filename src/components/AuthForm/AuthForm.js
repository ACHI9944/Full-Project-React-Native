import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import FlatButton from "../ui/FlatButton";
import AuthFormStyle from "./AuthFormStyle";

function AuthForm() {
  const styles = AuthFormStyle;
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
        style={[
          styles.button,
          isFilling ? { backgroundColor: "#542ee0" } : null,
        ]}
        pressedStyle={styles.pressedStyle}
        buttonTextStyle={styles.buttonTextStyle}
      >
        Log in
      </FlatButton>
    </View>
  );
}

export default AuthForm;
