import { Container } from "./styles";

export function ButtonText ({title,isActive = false, ...rest}){

  return (
    <Container type="buttom" isActive = {isActive} {...rest}>
      
      {title}

    </Container>
  )


}