import { View } from "react-native";
import TextWrapper from "../../components/TextWrapper";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function RoutesNavigation() {
  const { getItem } = useAsyncStorage("@TanzaniteWallet");
  const navigation = useNavigate();

  useEffect(() => {
    try {
      getItem().then((result) => {
          let data = null;
          try {
            data = JSON.parse(result || "{}");
          } catch (err) {
            console.error(err);
          }
          if (Boolean(data?.isCreated) === true) {
            console.log("navigating to /wallet")
            navigation("/wallet");
          } else {
            console.log("navigating to /intro")
            navigation("/intro")
          }
      })
    } catch (err) {
      console.error(err);
    }
  }, [])
  return (
    <View>
      <TextWrapper>Routes</TextWrapper>
    </View>
  )
}