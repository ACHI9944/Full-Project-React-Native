import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import Input from "../Input/Input";
import FlatButton from "../ui/FlatButton";
import {
  nameValidation,
  emailValidation,
  phoneValidation,
} from "../ui/Validation";
import SignupFormStyle from "./SignupFormStyle";

const styles = SignupFormStyle;

function SignupForm() {
  const navigation = useNavigation();

  const { control, handleSubmit, formState, watch } = useForm();
  const businessName = watch("businessName");
  const phone = watch("phone");
  const email = watch("Email");

  function manageInputHandler(data) {
    navigation.navigate("singup2");
  }
  return (
    <>
      <ScrollView
        contentContainerStyle={styles.screencontent}
        style={styles.screen}
      >
        <Input
          name="businessName"
          placeholder="Business name"
          keyboardType="default"
          control={control}
          isValid={nameValidation(businessName)}
          rules={{
            validate: (value) => nameValidation(value),
          }}
        />
        <Input
          name="phone"
          placeholder="Phone number"
          keyboardType="numbers-and-punctuation"
          control={control}
          isValid={phoneValidation(phone)}
          rules={{
            validate: (value) => phoneValidation(value),
          }}
        />
        <Input
          name="Email"
          placeholder="Email address"
          keyboardType="email-address"
          control={control}
          isValid={emailValidation(email)}
          rules={{
            validate: (value) => emailValidation(value),
          }}
        />
      </ScrollView>
      <FlatButton
        disabled={!formState.isValid}
        onPress={handleSubmit(manageInputHandler)}
        style={[styles.button, formState.isValid && styles.validStyle]}
        pressedStyle={styles.pressedStyle}
        buttonTextStyle={styles.buttonTextStyle}
      >
        Next
      </FlatButton>
    </>
  );
}

export default SignupForm;
