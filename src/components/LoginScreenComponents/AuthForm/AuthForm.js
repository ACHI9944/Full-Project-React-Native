import { useForm } from "react-hook-form";
import { View } from "react-native";
import Input from "../../Input/Input";
import FlatButton from "../../ui/FlatButton";
import { emailVal, passVal } from "../../ui/Validation";
import AuthFormStyle from "./AuthFormStyle";

const styles = AuthFormStyle;

function AuthForm({ manageInputHandler }) {
  const { control, handleSubmit, formState, watch } = useForm();
  const email = watch("email");
  const password = watch("password");

  function manageInputs(data) {
    manageInputHandler(data);
  }

  return (
    <View style={styles.authForm}>
      <Input
        name="email"
        placeholder="Email Address"
        keyboardType="email-address"
        control={control}
        isValid={emailVal(email)}
        rules={{
          validate: (value) => emailVal(value),
        }}
      />
      <Input
        name="password"
        placeholder="Password"
        keyboardType="default"
        control={control}
        isValid={passVal(password)}
        rules={{
          validate: (value) => passVal(value),
        }}
      />

      <FlatButton
        disabled={!formState.isValid}
        onPress={handleSubmit(manageInputs)}
        style={[styles.button, formState.isValid && styles.validStyle]}
        pressedStyle={styles.pressedStyle}
        buttonTextStyle={styles.buttonTextStyle}
      >
        Log in
      </FlatButton>
    </View>
  );
}

export default AuthForm;
