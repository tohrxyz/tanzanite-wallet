import { TouchableOpacity } from 'react-native';
import TextWrapper from "../TextWrapper";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function ButtonComponent(props: ButtonProps) {
  return (
      <TouchableOpacity 
        onPress={props.onClick} 
        className='bg-[#45484f] px-24 py-6 mt-4 flex justify-center items-center rounded-xl'
      >
        <TextWrapper className='text-white text-2xl'>{props.text}</TextWrapper>
      </TouchableOpacity>
  )
}