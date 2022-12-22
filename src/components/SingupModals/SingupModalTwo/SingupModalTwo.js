import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  KeyboardAvoidingView,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { SafeAreaView } from "react-native-safe-area-context";
import { SingupContext } from "../../../context/Singup-Context";
import Input from "../../Input/Input";
import AbsoluteIconButton from "../../ui/AbsoluteIconButton";
import FlatButton from "../../ui/FlatButton";
import { domainValidation, nameValidation } from "../../ui/Validation";
import SingupModalTwoStyle from "./SingupModalTwoStyle";

const styles = SingupModalTwoStyle;

function SingupModalTwo() {
  const { control, handleSubmit, formState, watch } = useForm();
  const address = watch("address");
  const zipCode = watch("zipcode");
  const website = watch("website");
  const instagram = watch("instagram");
  const contactName = watch("contactName");
  const contactUsername = watch("contactUsername");
  const businessType = watch("businessType");
  const budget = watch("budget");

  const authCtx = useContext(SingupContext);
  function goBack() {
    authCtx.ToggleSingupTwo();
    authCtx.ToggleSingupOne();
  }
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  function manageInputHandler(data) {}
  return (
    <Modal visible={authCtx.singupTwoIsVisible} animationType="slide">
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.topBar}>
            <AbsoluteIconButton
              top={6}
              left={15}
              name="ios-chevron-down"
              size={24}
              color="black"
              onPress={goBack}
            />
            <Text style={styles.header}>Sign Up</Text>
            <View style={styles.texts}>
              <Text style={styles.welcomeText}>Welcome!</Text>
              <Text style={styles.infoText}>
                Enter your account information first
              </Text>
            </View>
          </View>
          <View>
            <Pressable onPress={onOpen}>
              <Text style={{ fontSize: 50 }}>modal</Text>
            </Pressable>
          </View>

          <Modalize ref={modalizeRef} modalHeight={200}>
            <View style={{ flex: 0.5 }}>
              <Text>modal</Text>
              <Text>modal</Text>
              <Text>modal</Text>
              <Text>modal</Text>
            </View>
          </Modalize>
          <View style={styles.signupForm}>
            <ScrollView
              contentContainerStyle={styles.screencontent}
              style={styles.screen}
            >
              <View style={styles.inputs}>
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
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Modal>
  );
}

export default SingupModalTwo;
