import { View } from "react-native";
import TextWrapper from "../../components/TextWrapper";
import ButtonComponent from "../../components/Button";

export default function WalletScreen () {

  return (
    <View>
      <TextWrapper>Wallet Screen</TextWrapper>
      <ButtonComponent text="Go to Intro Screen" url="/" />
    </View>
  )
}