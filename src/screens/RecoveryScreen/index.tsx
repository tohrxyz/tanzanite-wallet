import { View } from "react-native";
import ButtonComponent from "../../components/Button";
import TextWrapper from "../../components/TextWrapper";

export default function RecoveryScreen() {
  return (
    <View>
      <TextWrapper>Recovery Screen</TextWrapper>
      <ButtonComponent text="Go to Intro Screen" url="/" />
    </View>
  )
}