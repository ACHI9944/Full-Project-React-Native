import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import Input from "../Input/Input";
import FlatButton from "../ui/FlatButton";
import AuthFormStyle from "./AuthFormStyle";

const styles = AuthFormStyle;

function AuthForm() {
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const navigation = useNavigation();

  // hook form
  const { control, handleSubmit, formState } = useForm();

  function manageInputHandler(data) {}

  return (
    <View style={styles.authForm}>
      <Input
        name="Email"
        placeholder="Email address"
        keyboardType="email-address"
        control={control}
        isValid={formState.isValid}
        rules={{
          required: "Email is required",
          pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
        }}
      />

      <FlatButton
        disabled={!formState.isValid}
        onPress={handleSubmit(manageInputHandler)}
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
