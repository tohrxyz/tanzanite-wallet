import { View, Alert } from 'react-native';
import ButtonComponent from '../../components/Button';
import TextWrapper from '../../components/TextWrapper';

export default function IntroScreen() {
  return (
    <View className='min-h-[100vh] bg-[#292a2d] w-full flex justify-center items-center opacity-1'>
      <TextWrapper className="text-5xl font-bold text-orange-500 italic">tanzanite wallet</TextWrapper>
      <View>
        <ButtonComponent text="create wallet" url="/wallet"/>
        <ButtonComponent text="recover wallet" url="/recover" />
      </View>
      <TextWrapper className="text-white text-xs mt-2 mb-24">made with love by @tohrxyz</TextWrapper>
    </View>
  );
}