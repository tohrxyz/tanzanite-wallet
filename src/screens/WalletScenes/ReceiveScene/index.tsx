import { Image, View } from "react-native";
import TextWrapper from "../../../components/TextWrapper";

const formatAddress = (address: string) => {
  // add space every 5 chars
  let formattedAddress = "";
  for (let i = 0; i < address.length; i++) {
    if (i % 5 === 0 && i !== 0) {
      formattedAddress += " ";
    }
    formattedAddress += address[i];
  }

  return formattedAddress;
}

export default function ReceiveScreen () {
  return (
    <View className="bg-[#292a2d] h-full w-full flex flex-col items-center py-6">
      <TextWrapper className="text-orange-500 text-5xl">Receive</TextWrapper>
      <View className="flex flex-col items-center py-10">
        <Image source={require('../../../../assets/xmr-address-qr-code.png')} />
        <TextWrapper className="text-white text-2xl px-10 pt-10">{formatAddress("83QP5atyd4nbB4nq3yQJL4ApxkCPdhMFaCU6cSzXYjE8c5qFX5DxeXqYTZjcFd43Gq7onGBhTnVN5VrJgX4RWuGqNBoZsiH")}</TextWrapper>
      </View>
    </View>
  )
}