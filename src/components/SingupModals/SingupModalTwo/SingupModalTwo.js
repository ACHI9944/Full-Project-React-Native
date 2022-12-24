import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
import Input from "../../Input/Input";
import CheckIcon from "../../ui/CheckIcon";
import CurrencyIcon from "../../ui/CurrencyIcon";
import FlatButton from "../../ui/FlatButton";
import { domainVal, nameVal } from "../../ui/Validation";
import BusinessSelectModal from "./BusinessSelectModal/BusinessSelectModal";
import CurrencySelectModal from "./CurrencySelectModal/CurrencySelectModal";
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
  const budget = watch("budget");

  const modalizeRefBusiness = useRef(null);
  const modalizeRefCurrency = useRef(null);

  function onOpenBusinessModal() {
    modalizeRefBusiness.current?.open();
  }
  function onOpenCurModal() {
    modalizeRefCurrency.current?.open();
  }
  function onCancelBusinessModal() {
    modalizeRefBusiness.current?.close();
  }
  function onCancelCurModal() {
    modalizeRefCurrency.current?.close();
  }

  const [businessModal, setBusinessModal] = useState("");
  const [currencyModal, setCurrencyModal] = useState("USD");

  const [checkIsShown, setcheckIsShown] = useState(false);
  function toggleTerms() {
    setcheckIsShown((prevValue) => !prevValue);
  }

  function manageInputHandler(data) {}
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
            <View style={styles.details}>
              <Text style={styles.detailsText}>Imoirtant details</Text>
            </View>

            <Input
              name="address"
              placeholder="Address"
              keyboardType="default"
              control={control}
              isValid={nameVal(address)}
              rules={{
                validate: (value) => nameVal(value),
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
              isValid={domainVal(website)}
              rules={{
                validate: (value) => domainVal(value),
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

            <Pressable
              style={styles.businessType}
              onPress={onOpenBusinessModal}
            >
              {!businessModal ? (
                <Text style={styles.businessTypeText}>Type of business</Text>
              ) : (
                <>
                  <Text style={styles.modalInnerText}>Type of business</Text>
                  <Text style={styles.chosenBusiness}>{businessModal}</Text>
                </>
              )}
            </Pressable>

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
              <Pressable style={styles.currency} onPress={onOpenCurModal}>
                <Text style={styles.currencyText}>{currencyModal}</Text>
                <CurrencyIcon />
              </Pressable>
            </View>
            <View style={styles.terms}>
              <Pressable onPress={toggleTerms} style={styles.checkBox}>
                {checkIsShown && <CheckIcon size={22} color="#bbaaf3" />}
              </Pressable>
              <Text style={styles.agree}>
                I agree with the terms and conditions
              </Text>
            </View>
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

      <Modalize ref={modalizeRefBusiness} modalStyle={styles.businessModal}>
        <BusinessSelectModal
          onSetBusinessModal={setBusinessModal}
          businessModal={businessModal}
          onCancelBusinessModal={onCancelBusinessModal}
        />
      </Modalize>
      <Modalize ref={modalizeRefCurrency} modalStyle={styles.currencyModal}>
        <CurrencySelectModal
          onsetCurrencyModal={setCurrencyModal}
          currencyModal={currencyModal}
          onCancelCurModal={onCancelCurModal}
        />
      </Modalize>
    </>
  );
}

export default SingupModalTwo;
