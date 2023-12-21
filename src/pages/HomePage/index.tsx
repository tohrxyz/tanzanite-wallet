import { View, Text, Button, Alert } from 'react-native';
import ButtonComponent from '../../components/Button';

export default function HomePage() {
  return (
    <View className='min-h-[100vh] bg-[#292a2d] w-full flex justify-center items-center opacity-1'>
      <Text className="text-4xl font-bold text-orange-500 italic">tezenite wallet</Text>
      <ButtonComponent text="create wallet" onClick={() => Alert.alert('create new wallet')} />
      <ButtonComponent text="recover wallet" onClick={() => Alert.alert('recover wallet')} />
      <Text className="text-white text-xs mt-2 mb-24">made with love by @tohrxyz</Text>
    </View>
  );
}