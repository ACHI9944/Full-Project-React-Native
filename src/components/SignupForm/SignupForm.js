import { useForm } from "react-hook-form";
import { View } from "react-native";
import Input from "../Input/Input";
import FlatButton from "../ui/FlatButton";
import SignupFormStyle from "./SignupFormStyle";

const styles = SignupFormStyle;

const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function SignupForm() {
  const { control, handleSubmit, formState, watch } = useForm();
  const businessNameText = watch("businessName");
  const number = watch("phone");
  const email = watch("Email");

  const emailisValid = !!email && email.match(EMAIL_REGEX);
  const numberIsValid = !!number && number.match(PHONE_REGEX);

  function manageInputHandler(data) {}
  return (
    <View style={styles.screen}>
      <View style={styles.signupForm}>
        <Input
          name="businessName"
          placeholder="Business name"
          keyboardType="default"
          control={control}
          isValid={!!businessNameText && businessNameText.length >= 5}
          rules={{
            required: true,
            minLength: "5",
          }}
        />
        <Input
          name="phone"
          placeholder="Phone number"
          keyboardType="numbers-and-punctuation"
          control={control}
          isValid={!!number && numberIsValid}
          rules={{
            required: true,
            pattern: PHONE_REGEX,
          }}
        />
        <Input
          name="Email"
          placeholder="Email address"
          keyboardType="email-address"
          control={control}
          isValid={emailisValid}
          rules={{
            required: true,
            pattern: EMAIL_REGEX,
          }}
        />
      </View>

      <FlatButton
        disabled={!formState.isValid}
        onPress={handleSubmit(manageInputHandler)}
        style={[styles.button, formState.isValid && styles.validStyle]}
        pressedStyle={styles.pressedStyle}
        buttonTextStyle={styles.buttonTextStyle}
      >
        Next
      </FlatButton>
    </View>
  );
}

export default SignupForm;
