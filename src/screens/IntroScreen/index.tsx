import { View, Alert, TouchableOpacity } from 'react-native';
import TextWrapper from '../../components/TextWrapper';
import { useNavigate } from 'react-router';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

function ButtonComponent({ text, url, mode }: { text: string, url?: string, mode: string }) {
  const { setItem } = useAsyncStorage("@TanzaniteWallet");
  const navigation = useNavigate();
  const handleOnPress = (mode: string) => {
    switch(mode) {
      case "create-wallet":
        return () => {
          setItem(JSON.stringify({ isCreated: true }));
          navigation("/wallet");
        }
      case "go-recovery":
        return () => {
          navigation("/recover");
        }
      default: 
        return () => {}
    }
  }
  return (
      <TouchableOpacity
        className='bg-[#45484f] px-24 py-6 mt-4 flex justify-center items-center rounded-xl' 
        onPress={handleOnPress(mode)}  
      >
        <TextWrapper className='text-white text-2xl'>{text}</TextWrapper>
      </TouchableOpacity>
  )
}

export default function IntroScreen() {
  return (
    <View className='min-h-[100vh] bg-[#292a2d] w-full flex justify-center items-center opacity-1'>
      <TextWrapper className="text-5xl font-bold text-orange-500 italic">tanzanite wallet</TextWrapper>
      <View>
        <ButtonComponent text="create wallet" url="/wallet" mode="create-wallet"/>
        <ButtonComponent text="recover wallet" url="/recover" mode="go-recovery"/>
      </View>
      <TextWrapper className="text-white text-xs mt-2 mb-24">made with love by @tohrxyz</TextWrapper>
    </View>
  );
}