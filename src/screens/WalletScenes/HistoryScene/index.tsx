import { ScrollView, View } from "react-native";
import TextWrapper from "../../../components/TextWrapper";

const Transaction = () => {
  return (
    <View className="w-full flex flex-row justify-between px-4 py-1 bg-[#3e4043] my-2 rounded-lg">
      <TextWrapper className="text-white text-2xl">Sent</TextWrapper>
      <TextWrapper className="text-white text-2xl">0.2423 XMR</TextWrapper>
      <TextWrapper className="text-white text-2xl">1 hour ago</TextWrapper>
    </View>
  )
}

const iters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

export default function HistoryScene () {
  return (
    <View className="w-full h-full flex flex-col items-center py-6">
      <TextWrapper className="text-orange-500 text-5xl">Balance</TextWrapper>
      <TextWrapper className="text-white text-3xl">1.542 XMR</TextWrapper>
      <TextWrapper className="text-gray-400 text-2xl">245.23 EUR</TextWrapper>
      <View className="w-full h-full flex flex-col items-center py-6">
        <TextWrapper className="text-orange-500 text-2xl mb-2">History</TextWrapper>
        <ScrollView className="h-full bg-[#303133] w-[90vw] rounded-lg p-2 mb-24">
          <View className="w-full flex flex-col items-center">
            {/* <TextWrapper className="text-white text-2xl">No transactions yet</TextWrapper> */}
            {iters.map((_, i) => <Transaction key={i} />)}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}