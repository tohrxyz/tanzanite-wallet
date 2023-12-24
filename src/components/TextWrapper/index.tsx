import { Text } from "react-native";
export default function TextWrapper (props: any) {
  return (
    <Text style={{fontFamily: "VT323_400Regular"}} className={props.className}>{props.children}</Text>
  )
}