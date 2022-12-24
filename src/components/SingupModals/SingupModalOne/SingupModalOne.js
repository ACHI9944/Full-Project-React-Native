import { useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import Input from "../../Input/Input";
import FlatButton from "../../ui/FlatButton";
import { emailVal, nameVal, phoneVal } from "../../ui/Validation";
import SingupModalOneStyle from "./SingupModalOneStyle";

const styles = SingupModalOneStyle;

function SingupModalOne({ nextPage }) {
  const { control, handleSubmit, formState, watch } = useForm();
  const businessName = watch("businessName");
  const phone = watch("phone");
  const email = watch("Email");

  function manageInputHandler(data) {
    nextPage();
  }
  return (
    <>
      <View style={styles.texts}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.infoText}>
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
              name="Email"
              placeholder="Email address"
              keyboardType="email-address"
              control={control}
              isValid={emailVal(email)}
              rules={{
                validate: (value) => emailVal(value),
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
