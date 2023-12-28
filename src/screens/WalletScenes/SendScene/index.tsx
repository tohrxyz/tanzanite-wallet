import { Button, TextInput, TouchableOpacity, View } from "react-native";
import TextWrapper from "../../../components/TextWrapper";

const SendButton = (props: any) => {
  return (
    <TouchableOpacity 
      className="bg-orange-500 w-[90vw] h-16 rounded-lg px-4 text-white text-2xl flex flex-row justify-center items-center mt-10"
      onPress={() => {
        alert("Sending 0.342 XMR to 83QP5atyd4nbB4nq3yQJL4ApxkCPdhMFaCU6cSzXYjE8c5qFX5DxeXqYTZjcFd43Gq7onGBhTnVN5VrJgX4RWuGqNBoZsiH")
      }}
    >
      <TextWrapper className="text-white text-4xl">Send</TextWrapper>
    </TouchableOpacity>
  )
}

export default function SendScene () {
  return (
    <View className="bg-[#292a2d] h-full w-full flex flex-col py-6 items-center">
      <TextWrapper className="text-orange-500 text-5xl">Send Scene</TextWrapper>
      <View>
        <TextWrapper className="text-white text-2xl mt-10 text-start">Recipient address</TextWrapper>
        <TextInput 
          className="bg-[#3e4043] w-[90vw] rounded-lg px-4 py-2 text-white text-lg"
          keyboardType="default"
          placeholder="Enter recipient address"
          placeholderTextColor={"#8e8e8e"}
          returnKeyType="next"
        />
      </View>
      <View>
        <TextWrapper className="text-white text-2xl mt-10 text-start">Amount</TextWrapper>
        <TextInput 
          className="bg-[#3e4043] w-[90vw] rounded-lg px-4 py-2 text-white text-lg"
          keyboardType="numeric"
          placeholder="Enter amount"
          placeholderTextColor={"#8e8e8e"}
          returnKeyType="done"
        />
      </View>
      <SendButton />
    </View>
  )
}