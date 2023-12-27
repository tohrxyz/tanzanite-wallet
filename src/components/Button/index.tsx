import { TouchableOpacity } from 'react-native';
import TextWrapper from "../TextWrapper";
import { Link } from "react-router-native"

interface ButtonProps {
  text: string;
  url?: string;
}

export default function ButtonComponent(props: ButtonProps) {
  return (
      <Link
        className='bg-[#45484f] px-24 py-6 mt-4 flex justify-center items-center rounded-xl' 
        to={props.url ? props.url : '/'}      
      >
        <TextWrapper className='text-white text-2xl'>{props.text}</TextWrapper>
      </Link>
  )
}