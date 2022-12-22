import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import LoadingOverlay from "./src/components/ui/LoadingOverlay";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "bona-nova": require("./src/assets/fonts/BonaNova-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <LoadingOverlay />;
  }

  return (
    <>
      <StatusBar style="dark" />

      <Navigation />
    </>
  );
}
