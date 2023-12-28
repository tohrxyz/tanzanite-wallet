import { View, Alert } from 'react-native';
import ButtonComponent from '../../components/Button';
import TextWrapper from '../../components/TextWrapper';
import { useNavigate } from 'react-router';
import { useCallback, useEffect } from 'react';
import { AppDatabase } from '../../services/database';

export default function IntroScreen() {
  const navigate = useNavigate();

  const readFromDB = useCallback(async () => {
    const appDB = new AppDatabase();
    const result = await appDB.selectFromTable("wallet", "isCreated", 1);
    console.log("Result from db: ", result);
  }, [])

  useEffect(() => {
    readFromDB();
  }, [readFromDB])
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