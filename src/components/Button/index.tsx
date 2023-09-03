import { TouchableOpacityProps } from "react-native";
import { ButtonComponent, ButtonTitle } from "./styles"

export interface IButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
}

export function Button({children, variant, ...rest}: IButtonProps) {
  console.log(rest, 'rest operator')
  return (
    <ButtonComponent variant={variant} {...rest}>
      <ButtonTitle>{children}</ButtonTitle>
    </ButtonComponent>
  )
}