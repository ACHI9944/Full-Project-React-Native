import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import Input from "../Input/Input";
import FlatButton from "../ui/FlatButton";
import { domainValidation, nameValidation } from "../ui/Validation";
import SignupForm2Style from "./SignupForm2Style";
const styles = SignupForm2Style;

function SignupForm2() {
  const navigation = useNavigation();
  function manageInputHandler(data) {
    navigation.navigate("singup2");
  }

  const { control, handleSubmit, formState, watch } = useForm();
  const address = watch("address");
  const zipCode = watch("zipcode");
  const website = watch("website");
  const instagram = watch("instagram");
  const contactName = watch("contactName");
  const contactUsername = watch("contactUsername");
  const businessType = watch("businessType");
  const budget = watch("budget");
  return (
    <>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.screen}>
          <View style={styles.signupForm}>
            <View style={styles.details}>
              <Text style={styles.detailsText}>Imoirtant details</Text>
            </View>

            <Input
              name="address"
              placeholder="Address"
              keyboardType="default"
              control={control}
              isValid={nameValidation(address)}
              rules={{
                validate: (value) => nameValidation(value),
              }}
            />
            <Input
              name="zipcode"
              placeholder="Zipcode"
              keyboardType="default"
              control={control}
              isValid={!!zipCode}
              rules={{
                required: true,
              }}
            />
            <Input
              name="website"
              placeholder="Website"
              keyboardType="default"
              control={control}
              isValid={domainValidation(website)}
              rules={{
                validate: (value) => domainValidation(value),
              }}
            />
            <Input
              name="instagram"
              placeholder="Instagram username"
              keyboardType="default"
              control={control}
              isValid={!!instagram}
              rules={{
                required: true,
              }}
            />
            <Input
              name="contactName"
              placeholder="Contact name"
              keyboardType="default"
              control={control}
              isValid={!!contactName}
              rules={{
                required: true,
              }}
            />
            <Input
              name="contactUsername"
              placeholder="Contact Line username"
              keyboardType="default"
              control={control}
              isValid={!!contactUsername}
              rules={{
                required: true,
              }}
            />
            <Input
              name="businessType"
              placeholder="Type of business"
              keyboardType="default"
              control={control}
              isValid={!!businessType}
              rules={{
                required: true,
              }}
            />
            <View style={styles.budgetInputs}>
              <View style={styles.budget}>
                <Input
                  name="budget"
                  placeholder="Campaing budget"
                  keyboardType="default"
                  control={control}
                  isValid={!!budget}
                  rules={{
                    required: true,
                  }}
                />
              </View>
              <View style={styles.unit}>
                <Input
                  defaultValue="USD"
                  name="currency"
                  placeholder=""
                  keyboardType="default"
                  control={control}
                  isValid={true}
                  rules={{
                    required: true,
                  }}
                />
              </View>
            </View>
            <Text style={styles.agree}>
              I agree with the terms and conditions
            </Text>
          </View>
        </View>
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

export default SignupForm2;
