import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import Input from "../Input/Input";
import FlatButton from "../ui/FlatButton";
import AuthFormStyle from "./AuthFormStyle";

function AuthForm() {
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const styles = AuthFormStyle;

  // hook form
  const { control, handleSubmit, watch } = useForm();
  const inputText = watch("Email");
  function manageInputHandler(data) {
    console.log(data);
  }

  return (
    <ScrollView contentContainerStyle={styles.authForm}>
      <Input
        name="Email"
        placeholder="Email address"
        keyboardType="email-address"
        control={control}
        rules={{
          required: "Email is required",
          pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
        }}
      />

      <FlatButton
        onPress={handleSubmit(manageInputHandler)}
        style={[styles.button, !!inputText && styles.typingStyle]}
        pressedStyle={styles.pressedStyle}
        buttonTextStyle={styles.buttonTextStyle}
      >
        Log in
      </FlatButton>
    </ScrollView>
  );
}

export default AuthForm;
