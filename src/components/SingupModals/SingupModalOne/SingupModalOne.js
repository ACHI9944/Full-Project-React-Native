import { useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import Input from "../../Input/Input";
import FlatButton from "../../ui/FlatButton";
import { emailVal, nameVal, passVal, phoneVal, rep } from "../../ui/Validation";
import SingupModalOneStyle from "./SingupModalOneStyle";

const styles = SingupModalOneStyle;

function SingupModalOne({ nextPage, setValues }) {
  const { control, handleSubmit, formState, watch } = useForm();
  const businessName = watch("businessName");
  const phone = watch("phone");
  const email = watch("email");
  const repEmail = watch("repEmail");
  const password = watch("password");
  const repPass = watch("repPass");

  function manageInputHandler(data) {
    setValues((prevValues) => ({ ...prevValues, ...data }));
    nextPage();
  }
  return (
    <>
      <View style={styles.texts}>
        <Text style={styles.largeText}>Welcome!</Text>
        <Text style={styles.smallText}>
          Enter your account information first
        </Text>
      </View>
      <View style={styles.signupForm}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          style={styles.scrollStyle}
        >
          <View style={styles.inputs}>
            <Input
              name="businessName"
              placeholder="Business name"
              keyboardType="default"
              control={control}
              isValid={nameVal(businessName)}
              rules={{
                validate: (value) => nameVal(value),
              }}
            />
            <Input
              name="phone"
              placeholder="Phone number"
              keyboardType="numbers-and-punctuation"
              control={control}
              isValid={phoneVal(phone)}
              rules={{
                validate: (value) => phoneVal(value),
              }}
            />
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
              name="repEmail"
              placeholder="Repeat Email Address"
              keyboardType="email-address"
              control={control}
              isValid={rep(repEmail, email)}
              rules={{
                validate: (value) => rep(value, email),
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
            <Input
              name="repPass"
              placeholder="Repeat Passord"
              keyboardType="default"
              control={control}
              isValid={rep(repPass, password)}
              rules={{
                validate: (value) => rep(value, password),
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
        </ScrollView>
      </View>
    </>
  );
}

export default SingupModalOne;
